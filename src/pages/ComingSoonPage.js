import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./StatCalculator.css"; // New CSS file

function ComingSoonPage() {
  const [charName, setCharName] = useState("");
  const [charNote, setCharNote] = useState("");
  const [buildNote, setBuildNote] = useState("");
  const [showCloth, setShowCloth] = useState(false);
  
  const stats = ["dunk","midrange","dribble","block","contest","vertical","consistency","layupClose","3pt","steal","reb","pass","movement","strength"];
  
  const defaults = {
    perimeter: {dunk:100,midrange:132,dribble:111,block:92,contest:90,vertical:91,consistency:110,layupClose:90,"3pt":125,steal:110,reb:90,pass:110,movement:110,strength:90},
    interior: {dunk:120,midrange:102,dribble:91,block:122,contest:110,vertical:111,consistency:90,layupClose:110,"3pt":95,steal:90,reb:120,pass:90,movement:90,strength:110}
  };
  
  const runeData = {
    red: {
      "cannon": {"3pt":1.6, dribble:0.6},
      "mid dominance": {"midrange":1.6, block:0.6},
      "on fire": {"3pt":1.6, steal:0.6},
      "gun fire": {"3pt":1.6, consistency:0.3, pass:0.3},
      "kaleidoscope midrange": {"midrange":1.6, pass:0.3, steal:0.3},
      "textbook shot": {"midrange":1.6, vertical:0.3, contest:0.3},
      "assassin": {"layupClose":1.6, contest:0.3, steal:0.3},
      "straight-in": {"layupClose":1.6, movement:0.3},
      "paint clash": {"layupClose":1.6, strength:0.6},
      "power magic": {"dunk":1.6, strength:0.3, layupClose:0.3},
      "airborne ace": {"dunk":1.6, reb:0.3, vertical:0.3},
      "post beast": {"dunk":1.6, block:0.6}
    },
    green: {
      "in and out": {"reb":1.6, "3pt":0.6},
      "block party": {"block":1.6, "strength":0.3, layupClose:0.3},
      "lockdown defender": {"reb":1.6, contest:0.6},
      "remote control": {"reb":1.6, pass:0.6},
      "stock gatherer": {"block":1.6, steal:0.6},
      "iron wall": {"contest":1.6, block:0.3, vertical:0.3},
      "duplicates": {"contest":1.6, consistency:0.6},
      "guerrilla": {"contest":1.6, midrange:0.6},
      "glove": {"steal":1.6, contest:0.6},
      "workhorse": {"steal":1.6, movement:0.15, dribble:0.3},
      "sleight of hand": {"steal":1.6, pass:0.6},
      "launch ready": {"strength":1.6, vertical:0.6},
      "interceptor": {"strength":1.6, steal:0.6},
      "powerhouse": {"strength":1.6, contest:0.3, dunk:0.3}
    },
    blue: {
      "golden touch": {"dribble":1.6, pass:0.6},
      "safety secure": {"dribble":1.6, midrange:0.3, layupClose:0.3},
      "mobile defender": {"movement":0.8, block:0.3, steal:0.3},
      "anchor": {"consistency":1.6, reb:0.6},
      "patient shooter": {"consistency":1.6, midrange:0.3, "3pt":0.3},
      "multidelivery": {"pass":1.6, movement:0.6},
      "accurate strike": {"pass":1.6, steal:0.3, dribble:0.3},
      "secret support": {"pass":1.6, layupClose:0.6},
      "aerial bombing": {"vertical":1.6, dunk:0.6},
      "rise up": {"vertical":1.6, consistency:0.3, strength:0.3},
      "fearless charge": {"movement":0.8, vertical:0.3, dunk:0.3},
      "unshakeable": {"consistency":1.6, contest:0.6}
    }
  };

  const [baseline, setBaseline] = useState({
    perimeter: stats.reduce((acc, stat) => ({...acc, [stat]: 0}), {}),
    interior: stats.reduce((acc, stat) => ({...acc, [stat]: 0}), {})
  });
  
  const [clothing, setClothing] = useState(
    stats.reduce((acc, stat) => ({...acc, [stat]: 0}), {}
  ));
  
  const [runeCount, setRuneCount] = useState({});
  const [runeMods, setRuneMods] = useState(
    stats.reduce((acc, stat) => ({...acc, [stat]: 0}), {}
  ));

  const loadTatum = () => {
    setBaseline({
      perimeter: {...defaults.perimeter},
      interior: {...defaults.interior}
    });
  };

  const handleBaselineChange = (mode, stat, value) => {
    setBaseline(prev => ({
      ...prev,
      [mode]: {
        ...prev[mode],
        [stat]: Number(value)
      }
    }));
  };

  const handleClothingChange = (stat, value) => {
    setClothing(prev => ({
      ...prev,
      [stat]: Number(value)
    }));
  };

  const addRune = (color, name) => {
    if ((runeCount[name] || 0) >= 10) return;
    
    const newCount = {...runeCount, [name]: (runeCount[name] || 0) + 1};
    setRuneCount(newCount);
    
    const newMods = {...runeMods};
    Object.entries(runeData[color][name]).forEach(([k, v]) => {
      newMods[k] = (newMods[k] || 0) + v;
    });
    setRuneMods(newMods);
  };

  const removeRune = (color, name) => {
    if (!name || (runeCount[name] || 0) <= 0) return;
    
    const newCount = {...runeCount, [name]: runeCount[name] - 1};
    setRuneCount(newCount);
    
    const newMods = {...runeMods};
    Object.entries(runeData[color][name]).forEach(([k, v]) => {
      newMods[k] -= v;
    });
    setRuneMods(newMods);
  };

  const saveJson = () => {
    const build = {
      name: charName,
      note: charNote,
      buildNote: buildNote,
      baseline,
      clothing,
      runeMods,
      runeCount
    };
    
    const blob = new Blob([JSON.stringify(build, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'build.json';
    a.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        setCharName(data.name || '');
        setCharNote(data.note || '');
        setBuildNote(data.buildNote || '');
        setBaseline(data.baseline || {perimeter: {}, interior: {}});
        setClothing(data.clothing || {});
        setRuneMods(data.runeMods || {});
        setRuneCount(data.runeCount || {});
      } catch (err) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  const renderSelectedRunes = (color) => {
    return Object.entries(runeCount)
      .filter(([name]) => runeData[color.toLowerCase()][name])
      .filter(([, count]) => count > 0)
      .map(([name, count]) => (
        <span 
          key={name}
          className="selected-item" 
          onClick={() => removeRune(color.toLowerCase(), name)}
        >
          {name} x{count}
        </span>
      ));
  };

  const renderRuneButtons = (color) => {
    return Object.entries(runeData[color.toLowerCase()]).map(([name, mods]) => (
      <div 
        key={name}
        className={`rune-btn ${color.toLowerCase()}`}
        onClick={() => addRune(color.toLowerCase(), name)}
      >
        <strong>{name}</strong>
        {Object.entries(mods).map(([k, v]) => `${k} ${v}`).join('\n')}
      </div>
    ));
  };

  return (
    <div className="stat-calculator">
      <h1>Stat Build Calculator</h1>
      
      <div className="section">
        <h2>Character & Build Info</h2>
        <label>Name: <input value={charName} onChange={(e) => setCharName(e.target.value)} type="text" /></label><br/><br/>
        <label>Note: <input value={charNote} onChange={(e) => setCharNote(e.target.value)} type="text" style={{width: '80%'}} /></label><br/><br/>
        <label>Build Note: <input value={buildNote} onChange={(e) => setBuildNote(e.target.value)} type="text" style={{width: '80%'}} /></label><br/><br/>
        <button onClick={loadTatum}>Load Jason Tatum Defaults</button>
        <button className="secondary" onClick={() => document.getElementById('jsonInput').click()}>Import Build JSON</button>
        <input type="file" id="jsonInput" accept="application/json" onChange={handleFileUpload} style={{display: 'none'}} />
      </div>

      <div className="section">
        <h2>Baseline Stats</h2>
        <table className="stat-table">
          <thead><tr><th>Stat</th><th>Perimeter</th><th>Interior</th></tr></thead>
          <tbody>
            {stats.map(stat => (
              <tr key={stat}>
                <td>{stat}</td>
                <td>
                  <input 
                    type="number" 
                    value={baseline.perimeter[stat] || 0}
                    onChange={(e) => handleBaselineChange('perimeter', stat, e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={baseline.interior[stat] || 0}
                    onChange={(e) => handleBaselineChange('interior', stat, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Clothing Mods?</h2>
        <label><input type="radio" name="clothToggle" checked={showCloth} onChange={() => setShowCloth(true)} /> Yes</label>
        <label><input type="radio" name="clothToggle" checked={!showCloth} onChange={() => setShowCloth(false)} /> No</label>
        
        {showCloth && (
          <div id="clothSection">
            <h3>Clothing Additions</h3>
            <table className="stat-table">
              <thead><tr><th>Stat</th><th>Add</th></tr></thead>
              <tbody>
                {stats.map(stat => (
                  <tr key={stat}>
                    <td>{stat}</td>
                    <td>
                      <input 
                        type="number" 
                        value={clothing[stat] || 0}
                        onChange={(e) => handleClothingChange(stat, e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="section">
        <h2>Red Runes</h2>
        <div className="selected-list">
          {renderSelectedRunes('red')}
        </div>
        <div className="rune-section">
          {renderRuneButtons('red')}
        </div>
      </div>

      <div className="section">
        <h2>Green Runes</h2>
        <div className="selected-list">
          {renderSelectedRunes('green')}
        </div>
        <div className="rune-section">
          {renderRuneButtons('green')}
        </div>
      </div>

      <div className="section">
        <h2>Blue Runes</h2>
        <div className="selected-list">
          {renderSelectedRunes('blue')}
        </div>
        <div className="rune-section">
          {renderRuneButtons('blue')}
        </div>
      </div>

      <div className="section">
        <h2>Results</h2>
        <table className="result-table">
          <thead>
            <tr>
              <th>Stat</th>
              <th>Cloth</th>
              <th>Runes</th>
              <th>Perim Build</th>
              <th>Interior</th>
            </tr>
          </thead>
          <tbody>
            {stats.map(stat => {
              const cloth = showCloth ? (clothing[stat] || 0) : 0;
              const runes = (runeMods[stat] || 0).toFixed(1);
              const perim = ((baseline.perimeter[stat] || 0) + cloth + parseFloat(runes)).toFixed(1);
              const inter = ((baseline.interior[stat] || 0) + cloth + parseFloat(runes)).toFixed(1);
              
              return (
                <tr key={stat}>
                  <td>{stat}</td>
                  <td>{cloth}</td>
                  <td>{runes}</td>
                  <td>{perim}</td>
                  <td>{inter}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={saveJson}>Save Build JSON</button>
        <button className="secondary" onClick={() => window.location.reload()}>Clear All</button>
      </div>
    </div>
  );
}

export default ComingSoonPage;