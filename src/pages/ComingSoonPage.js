import React, { useState } from "react";
import "./StatCalculator.css";

function ComingSoonPage() {
  const [charName, setCharName] = useState("");
  const [charNote, setCharNote] = useState("");
  const [buildNote, setBuildNote] = useState("");
  const [showCloth, setShowCloth] = useState(false);
  
  const stats = ["dunk","midrange","dribble","block","contest","vertical","consistency","layupClose","3pt","steal","reb","pass","movement","strength"];
  
const characterDefaults = {
  "Adebayo": {
    perimeter: {dunk:132, layupClose:133, midrange:80, "3pt":28, dribble:58, steal:57, block:130, reb:131, contest:132, pass:68, vertical:96, movement:75, consistency:82, strength:130},
    interior: {dunk:132, layupClose:133, midrange:80, "3pt":28, dribble:58, steal:57, block:130, reb:131, contest:132, pass:68, vertical:96, movement:75, consistency:82, strength:130}
  },
  "Allen": {
    perimeter: {dunk:84, layupClose:133, midrange:137, "3pt":141, dribble:103, steal:71, block:61, reb:48, contest:101, pass:119, vertical:76, movement:96, consistency:108, strength:67},
    interior: {dunk:84, layupClose:133, midrange:137, "3pt":141, dribble:103, steal:71, block:61, reb:48, contest:101, pass:119, vertical:76, movement:96, consistency:108, strength:67}
  },
  "Antetokounmpo": {
    perimeter: {dunk:142, layupClose:131, midrange:71, "3pt":30, dribble:70, steal:59, block:140, reb:123, contest:132, pass:77, vertical:139, movement:82, consistency:60, strength:140},
    interior: {dunk:142, layupClose:131, midrange:71, "3pt":30, dribble:70, steal:59, block:140, reb:123, contest:132, pass:77, vertical:139, movement:82, consistency:60, strength:140}
  },
  "Booker": {
    perimeter: {dunk:46, layupClose:142, midrange:142, "3pt":135, dribble:135, steal:70, block:53, reb:41, contest:87, pass:123, vertical:69, movement:97, consistency:93, strength:58},
    interior: {dunk:46, layupClose:142, midrange:142, "3pt":135, dribble:135, steal:70, block:53, reb:41, contest:87, pass:123, vertical:69, movement:97, consistency:93, strength:58}
  },
  "Brooks": {
    perimeter: {dunk:115, layupClose:125, midrange:133, "3pt":112, dribble:107, steal:97, block:80, reb:68, contest:137, pass:77, vertical:99, movement:73, consistency:114, strength:91},
    interior: {dunk:115, layupClose:125, midrange:133, "3pt":112, dribble:107, steal:97, block:80, reb:68, contest:137, pass:77, vertical:99, movement:73, consistency:114, strength:91}
  },
  "Brown": {
    perimeter: {dunk:119, layupClose:102, midrange:136, "3pt":118, dribble:96, steal:95, block:107, reb:76, contest:118, pass:91, vertical:113, movement:91, consistency:111, strength:98},
    interior: {dunk:119, layupClose:102, midrange:136, "3pt":118, dribble:96, steal:95, block:107, reb:76, contest:118, pass:91, vertical:113, movement:91, consistency:111, strength:98}
  },
  "Butler": {
    perimeter: {dunk:123, layupClose:110, midrange:127, "3pt":85, dribble:96, steal:92, block:115, reb:91, contest:120, pass:84, vertical:107, movement:90, consistency:111, strength:122},
    interior: {dunk:123, layupClose:110, midrange:127, "3pt":85, dribble:96, steal:92, block:115, reb:91, contest:120, pass:84, vertical:107, movement:90, consistency:111, strength:122}
  },
  "Capela": {
    perimeter: {dunk:141, layupClose:140, midrange:54, "3pt":30, dribble:53, steal:60, block:141, reb:140, contest:135, pass:65, vertical:82, movement:53, consistency:102, strength:131},
    interior: {dunk:141, layupClose:140, midrange:54, "3pt":30, dribble:53, steal:60, block:141, reb:140, contest:135, pass:65, vertical:82, movement:53, consistency:102, strength:131}
  },
  "Clarkson": {
    perimeter: {dunk:94, layupClose:130, midrange:125, "3pt":130, dribble:127, steal:69, block:51, reb:42, contest:87, pass:119, vertical:75, movement:97, consistency:94, strength:60},
    interior: {dunk:94, layupClose:130, midrange:125, "3pt":130, dribble:127, steal:69, block:51, reb:42, contest:87, pass:119, vertical:75, movement:97, consistency:94, strength:60}
  },
  "Curry": {
    perimeter: {dunk:20, layupClose:143, midrange:141, "3pt":144, dribble:140, steal:94, block:39, reb:40, contest:78, pass:138, vertical:55, movement:116, consistency:106, strength:66},
    interior: {dunk:20, layupClose:143, midrange:141, "3pt":144, dribble:140, steal:94, block:39, reb:40, contest:78, pass:138, vertical:55, movement:116, consistency:106, strength:66}
  },
  "Davis": {
    perimeter: {dunk:135, layupClose:127, midrange:114, "3pt":58, dribble:58, steal:52, block:130, reb:126, contest:126, pass:66, vertical:132, movement:75, consistency:68, strength:116},
    interior: {dunk:135, layupClose:127, midrange:114, "3pt":58, dribble:58, steal:52, block:130, reb:126, contest:126, pass:66, vertical:132, movement:75, consistency:68, strength:116}
  },
  "DeRozan": {
    perimeter: {dunk:111, layupClose:140, midrange:141, "3pt":79, dribble:116, steal:74, block:92, reb:76, contest:115, pass:87, vertical:116, movement:74, consistency:96, strength:108},
    interior: {dunk:111, layupClose:140, midrange:141, "3pt":79, dribble:116, steal:74, block:92, reb:76, contest:115, pass:87, vertical:116, movement:74, consistency:96, strength:108}
  },
  "Doncic": {
    perimeter: {dunk:40, layupClose:139, midrange:138, "3pt":119, dribble:137, steal:52, block:54, reb:57, contest:89, pass:136, vertical:52, movement:108, consistency:98, strength:84},
    interior: {dunk:40, layupClose:139, midrange:138, "3pt":119, dribble:137, steal:52, block:54, reb:57, contest:89, pass:136, vertical:52, movement:108, consistency:98, strength:84}
  },
  "Durant": {
    perimeter: {dunk:113, layupClose:140, midrange:144, "3pt":121, dribble:123, steal:70, block:101, reb:92, contest:115, pass:90, vertical:110, movement:75, consistency:87, strength:95},
    interior: {dunk:113, layupClose:140, midrange:144, "3pt":121, dribble:123, steal:70, block:101, reb:92, contest:115, pass:90, vertical:110, movement:75, consistency:87, strength:95}
  },
  "Embiid": {
    perimeter: {dunk:131, layupClose:134, midrange:115, "3pt":63, dribble:65, steal:52, block:130, reb:130, contest:127, pass:81, vertical:87, movement:66, consistency:75, strength:132},
    interior: {dunk:131, layupClose:134, midrange:115, "3pt":63, dribble:65, steal:52, block:130, reb:130, contest:127, pass:81, vertical:87, movement:66, consistency:75, strength:132}
  },
  "Fu Zhi": {
    perimeter: {dunk:99, layupClose:121, midrange:122, "3pt":87, dribble:82, steal:125, block:88, reb:71, contest:140, pass:86, vertical:105, movement:72, consistency:128, strength:111},
    interior: {dunk:99, layupClose:121, midrange:122, "3pt":87, dribble:82, steal:125, block:88, reb:71, contest:140, pass:86, vertical:105, movement:72, consistency:128, strength:111}
  },
  "Gasol": {
    perimeter: {dunk:132, layupClose:129, midrange:125, "3pt":82, dribble:62, steal:59, block:128, reb:132, contest:126, pass:71, vertical:78, movement:64, consistency:81, strength:118},
    interior: {dunk:132, layupClose:129, midrange:125, "3pt":82, dribble:62, steal:59, block:128, reb:132, contest:126, pass:71, vertical:78, movement:64, consistency:81, strength:118}
  },
  "George": {
    perimeter: {dunk:114, layupClose:116, midrange:133, "3pt":123, dribble:114, steal:99, block:79, reb:62, contest:115, pass:103, vertical:74, movement:80, consistency:121, strength:92},
    interior: {dunk:114, layupClose:116, midrange:133, "3pt":123, dribble:114, steal:99, block:79, reb:62, contest:115, pass:103, vertical:74, movement:80, consistency:121, strength:92}
  },
  "Gordon": {
    perimeter: {dunk:140, layupClose:111, midrange:93, "3pt":73, dribble:59, steal:48, block:125, reb:111, contest:114, pass:60, vertical:137, movement:70, consistency:53, strength:135},
    interior: {dunk:140, layupClose:111, midrange:93, "3pt":73, dribble:59, steal:48, block:125, reb:111, contest:114, pass:60, vertical:137, movement:70, consistency:53, strength:135}
  },
  "Han Xu": {
    perimeter: {dunk:108, layupClose:137, midrange:119, "3pt":101, dribble:68, steal:65, block:114, reb:125, contest:120, pass:84, vertical:78, movement:78, consistency:73, strength:112},
    interior: {dunk:108, layupClose:137, midrange:119, "3pt":101, dribble:68, steal:65, block:114, reb:125, contest:120, pass:84, vertical:78, movement:78, consistency:73, strength:112}
  },
  "Harden": {
    perimeter: {dunk:48, layupClose:135, midrange:132, "3pt":133, dribble:143, steal:66, block:61, reb:45, contest:90, pass:131, vertical:80, movement:103, consistency:89, strength:89},
    interior: {dunk:48, layupClose:135, midrange:132, "3pt":133, dribble:143, steal:66, block:61, reb:45, contest:90, pass:131, vertical:80, movement:103, consistency:89, strength:89}
  },
  "Ingram": {
    perimeter: {dunk:117, layupClose:125, midrange:139, "3pt":118, dribble:113, steal:76, block:86, reb:71, contest:116, pass:99, vertical:92, movement:83, consistency:105, strength:88},
    interior: {dunk:117, layupClose:125, midrange:139, "3pt":118, dribble:113, steal:76, block:86, reb:71, contest:116, pass:99, vertical:92, movement:83, consistency:105, strength:88}
  },
  "Irving": {
    perimeter: {dunk:25, layupClose:143, midrange:140, "3pt":130, dribble:145, steal:84, block:52, reb:36, contest:85, pass:137, vertical:80, movement:112, consistency:99, strength:60},
    interior: {dunk:25, layupClose:143, midrange:140, "3pt":130, dribble:145, steal:84, block:52, reb:36, contest:85, pass:137, vertical:80, movement:112, consistency:99, strength:60}
  },
  "Jackson Jr.": {
    perimeter: {dunk:131, layupClose:114, midrange:104, "3pt":101, dribble:66, steal:56, block:127, reb:92, contest:116, pass:62, vertical:133, movement:69, consistency:64, strength:123},
    interior: {dunk:131, layupClose:114, midrange:104, "3pt":101, dribble:66, steal:56, block:127, reb:92, contest:116, pass:62, vertical:133, movement:69, consistency:64, strength:123}
  },
  "James": {
    perimeter: {dunk:138, layupClose:120, midrange:118, "3pt":83, dribble:100, steal:75, block:121, reb:94, contest:115, pass:102, vertical:125, movement:92, consistency:111, strength:133},
    interior: {dunk:138, layupClose:120, midrange:118, "3pt":83, dribble:100, steal:75, block:121, reb:94, contest:115, pass:102, vertical:125, movement:92, consistency:111, strength:133}
  },
  "Johnson": {
    perimeter: {dunk:72, layupClose:135, midrange:130, "3pt":117, dribble:115, steal:72, block:88, reb:74, contest:113, pass:89, vertical:105, movement:80, consistency:84, strength:90},
    interior: {dunk:72, layupClose:135, midrange:130, "3pt":117, dribble:115, steal:72, block:88, reb:74, contest:113, pass:89, vertical:105, movement:80, consistency:84, strength:90}
  },
  "Jokic": {
    perimeter: {dunk:112, layupClose:137, midrange:124, "3pt":108, dribble:65, steal:54, block:115, reb:132, contest:121, pass:113, vertical:66, movement:56, consistency:52, strength:133},
    interior: {dunk:112, layupClose:137, midrange:124, "3pt":108, dribble:65, steal:54, block:115, reb:132, contest:121, pass:113, vertical:66, movement:56, consistency:52, strength:133}
  },
  "Julio": {
    perimeter: {dunk:125, layupClose:114, midrange:100, "3pt":28, dribble:74, steal:56, block:131, reb:117, contest:123, pass:64, vertical:134, movement:67, consistency:62, strength:131},
    interior: {dunk:125, layupClose:114, midrange:100, "3pt":28, dribble:74, steal:56, block:131, reb:117, contest:123, pass:64, vertical:134, movement:67, consistency:62, strength:131}
  },
  "Kidd": {
    perimeter: {dunk:27, layupClose:136, midrange:119, "3pt":110, dribble:118, steal:105, block:36, reb:61, contest:106, pass:143, vertical:58, movement:110, consistency:108, strength:89},
    interior: {dunk:27, layupClose:136, midrange:119, "3pt":110, dribble:118, steal:105, block:36, reb:61, contest:106, pass:143, vertical:58, movement:110, consistency:108, strength:89}
  },
  "LaVine": {
    perimeter: {dunk:106, layupClose:107, midrange:107, "3pt":125, dribble:109, steal:75, block:51, reb:32, contest:88, pass:113, vertical:108, movement:99, consistency:87, strength:88},
    interior: {dunk:106, layupClose:107, midrange:107, "3pt":125, dribble:109, steal:75, block:51, reb:32, contest:88, pass:113, vertical:108, movement:99, consistency:87, strength:88}
  },
  "Leonard": {
    perimeter: {dunk:114, layupClose:105, midrange:130, "3pt":119, dribble:93, steal:128, block:103, reb:74, contest:142, pass:84, vertical:101, movement:76, consistency:125, strength:104},
    interior: {dunk:114, layupClose:105, midrange:130, "3pt":119, dribble:93, steal:128, block:103, reb:74, contest:142, pass:84, vertical:101, movement:76, consistency:125, strength:104}
  },
  "Li Meng": {
    perimeter: {dunk:58, layupClose:112, midrange:135, "3pt":120, dribble:143, steal:89, block:69, reb:40, contest:100, pass:140, vertical:88, movement:82, consistency:103, strength:81},
    interior: {dunk:58, layupClose:112, midrange:135, "3pt":120, dribble:143, steal:89, block:69, reb:40, contest:100, pass:140, vertical:88, movement:82, consistency:103, strength:81}
  },
  "Li Yueru": {
    perimeter: {dunk:114, layupClose:133, midrange:125, "3pt":97, dribble:77, steal:56, block:121, reb:129, contest:122, pass:80, vertical:72, movement:65, consistency:66, strength:125},
    interior: {dunk:114, layupClose:133, midrange:125, "3pt":97, dribble:77, steal:56, block:121, reb:129, contest:122, pass:80, vertical:72, movement:65, consistency:66, strength:125}
  },
  "Lin": {
    perimeter: {dunk:46, layupClose:139, midrange:135, "3pt":118, dribble:135, steal:92, block:48, reb:39, contest:90, pass:137, vertical:82, movement:110, consistency:96, strength:58},
    interior: {dunk:46, layupClose:139, midrange:135, "3pt":118, dribble:135, steal:92, block:48, reb:39, contest:90, pass:137, vertical:82, movement:110, consistency:96, strength:58}
  },
  "Lopez": {
    perimeter: {dunk:124, layupClose:125, midrange:114, "3pt":110, dribble:56, steal:53, block:125, reb:127, contest:121, pass:61, vertical:76, movement:52, consistency:51, strength:130},
    interior: {dunk:124, layupClose:125, midrange:114, "3pt":110, dribble:56, steal:53, block:125, reb:127, contest:121, pass:61, vertical:76, movement:52, consistency:51, strength:130}
  },
  "Malone": {
    perimeter: {dunk:130, layupClose:121, midrange:139, "3pt":45, dribble:66, steal:50, block:132, reb:133, contest:117, pass:72, vertical:116, movement:71, consistency:69, strength:138},
    interior: {dunk:130, layupClose:121, midrange:139, "3pt":45, dribble:66, steal:50, block:132, reb:133, contest:117, pass:72, vertical:116, movement:71, consistency:69, strength:138},
  },
  "McGrady": {
    perimeter: {dunk:111, layupClose:104, midrange:135, "3pt":126, dribble:122, steal:64, block:73, reb:58, contest:94, pass:110, vertical:93, movement:102, consistency:91, strength:78},
    interior: {dunk:111, layupClose:104, midrange:135, "3pt":126, dribble:122, steal:64, block:73, reb:58, contest:94, pass:110, vertical:93, movement:102, consistency:91, strength:78}
  },
  "McCollum": {
    perimeter: {dunk:42, layupClose:134, midrange:135, "3pt":136, dribble:127, steal:76, block:57, reb:43, contest:88, pass:126, vertical:77, movement:99, consistency:93, strength:64},
    interior: {dunk:42, layupClose:134, midrange:135, "3pt":136, dribble:127, steal:76, block:57, reb:43, contest:88, pass:126, vertical:77, movement:99, consistency:93, strength:64}
  },
  "Murray": {
    perimeter: {dunk:46, layupClose:141, midrange:131, "3pt":127, dribble:134, steal:77, block:47, reb:43, contest:86, pass:135, vertical:78, movement:101, consistency:94, strength:59},
    interior: {dunk:46, layupClose:141, midrange:131, "3pt":127, dribble:134, steal:77, block:47, reb:43, contest:86, pass:135, vertical:78, movement:101, consistency:94, strength:59}
  },
  "Nowitzki": {
    perimeter: {dunk:125, layupClose:125, midrange:131, "3pt":126, dribble:60, steal:57, block:121, reb:121, contest:116, pass:68, vertical:92, movement:64, consistency:54, strength:120},
    interior: {dunk:125, layupClose:125, midrange:131, "3pt":126, dribble:60, steal:57, block:121, reb:121, contest:116, pass:68, vertical:92, movement:64, consistency:54, strength:120}
  },
  "Olajuwon": {
    perimeter: {dunk:131, layupClose:138, midrange:118, "3pt":32, dribble:77, steal:57, block:143, reb:140, contest:126, pass:65, vertical:90, movement:70, consistency:82, strength:120},
    interior: {dunk:131, layupClose:138, midrange:118, "3pt":32, dribble:77, steal:57, block:143, reb:140, contest:126, pass:65, vertical:90, movement:70, consistency:82, strength:120}
  },
  "Paul": {
    perimeter: {dunk:25, layupClose:120, midrange:142, "3pt":89, dribble:134, steal:125, block:34, reb:33, contest:108, pass:142, vertical:56, movement:106, consistency:121, strength:69},
    interior: {dunk:25, layupClose:120, midrange:142, "3pt":89, dribble:134, steal:125, block:34, reb:33, contest:108, pass:142, vertical:56, movement:106, consistency:121, strength:69}
  },
  "Pierce": {
    perimeter: {dunk:109, layupClose:126, midrange:129, "3pt":127, dribble:90, steal:89, block:91, reb:82, contest:123, pass:90, vertical:93, movement:88, consistency:113, strength:124},
    interior: {dunk:109, layupClose:126, midrange:129, "3pt":127, dribble:90, steal:89, block:91, reb:82, contest:123, pass:90, vertical:93, movement:88, consistency:113, strength:124}
  },
  "Porzingis": {
    perimeter: {dunk:129, layupClose:127, midrange:100, "3pt":73, dribble:57, steal:54, block:131, reb:130, contest:132, pass:62, vertical:91, movement:59, consistency:63, strength:126},
    interior: {dunk:129, layupClose:127, midrange:100, "3pt":73, dribble:57, steal:54, block:131, reb:130, contest:132, pass:62, vertical:91, movement:59, consistency:63, strength:126}
  },
  "Rodman": {
    perimeter: {dunk:131, layupClose:137, midrange:87, "3pt":30, dribble:52, steal:58, block:121, reb:143, contest:132, pass:68, vertical:135, movement:82, consistency:90, strength:122},
    interior: {dunk:131, layupClose:137, midrange:87, "3pt":30, dribble:52, steal:58, block:121, reb:143, contest:132, pass:68, vertical:135, movement:82, consistency:90, strength:122}
  },
  "Rose": {
    perimeter: {dunk:110, layupClose:123, midrange:120, "3pt":115, dribble:131, steal:85, block:40, reb:35, contest:88, pass:126, vertical:108, movement:121, consistency:86, strength:75},
    interior: {dunk:110, layupClose:123, midrange:120, "3pt":115, dribble:131, steal:85, block:40, reb:35, contest:88, pass:126, vertical:108, movement:121, consistency:86, strength:75}
  },
  "S.G. Alexander": {
    perimeter: {dunk:36, layupClose:135, midrange:142, "3pt":119, dribble:128, steal:96, block:71, reb:40, contest:91, pass:130, vertical:61, movement:107, consistency:100, strength:71},
    interior: {dunk:36, layupClose:135, midrange:142, "3pt":119, dribble:128, steal:96, block:71, reb:40, contest:91, pass:130, vertical:61, movement:107, consistency:100, strength:71}
  },
  "Siakam": {
    perimeter: {dunk:130, layupClose:128, midrange:105, "3pt":56, dribble:72, steal:53, block:113, reb:115, contest:117, pass:79, vertical:129, movement:76, consistency:49, strength:121},
    interior: {dunk:130, layupClose:128, midrange:105, "3pt":56, dribble:72, steal:53, block:113, reb:115, contest:117, pass:79, vertical:129, movement:76, consistency:49, strength:121}
  },
  "Tatum": {
    perimeter: {dunk:100, layupClose:90, midrange:135, "3pt":125, dribble:110, steal:110, block:95, reb:95, contest:90, pass:115, vertical:90, movement:110, consistency:110, strength:90},
    interior: {dunk:120, layupClose:110, midrange:105, "3pt":95, dribble:90, steal:90, block:125, reb:125, contest:110, pass:95, vertical:110, movement:90, consistency:90, strength:110}
  },
  "Thompson": {
    perimeter: {dunk:45, layupClose:118, midrange:135, "3pt":140, dribble:95, steal:99, block:62, reb:37, contest:122, pass:104, vertical:65, movement:83, consistency:120, strength:74},
    interior: {dunk:45, layupClose:118, midrange:135, "3pt":140, dribble:95, steal:99, block:62, reb:37, contest:122, pass:104, vertical:65, movement:83, consistency:120, strength:74}
  },
  "Wade": {
    perimeter: {dunk:121, layupClose:121, midrange:125, "3pt":117, dribble:121, steal:85, block:83, reb:38, contest:86, pass:101, vertical:90, movement:110, consistency:87, strength:76},
    interior: {dunk:121, layupClose:121, midrange:125, "3pt":117, dribble:121, steal:85, block:83, reb:38, contest:86, pass:101, vertical:90, movement:110, consistency:87, strength:76}
  },
  "Wallace": {
    perimeter: {dunk:137, layupClose:126, midrange:61, "3pt":28, dribble:56, steal:77, block:139, reb:134, contest:131, pass:69, vertical:125, movement:76, consistency:93, strength:134},
    interior: {dunk:137, layupClose:126, midrange:61, "3pt":28, dribble:56, steal:77, block:139, reb:134, contest:131, pass:69, vertical:125, movement:76, consistency:93, strength:134}
  },
  "Westbrook": {
    perimeter: {dunk:98, layupClose:111, midrange:90, "3pt":71, dribble:120, steal:84, block:46, reb:80, contest:86, pass:118, vertical:101, movement:125, consistency:74, strength:95},
    interior: {dunk:98, layupClose:111, midrange:90, "3pt":71, dribble:120, steal:84, block:46, reb:80, contest:86, pass:118, vertical:101, movement:125, consistency:74, strength:95}
  },
  "Wiggins": {
    perimeter: {dunk:119, layupClose:121, midrange:119, "3pt":93, dribble:95, steal:72, block:107, reb:94, contest:113, pass:85, vertical:122, movement:81, consistency:101, strength:116},
    interior: {dunk:119, layupClose:121, midrange:119, "3pt":93, dribble:95, steal:72, block:107, reb:94, contest:113, pass:85, vertical:122, movement:81, consistency:101, strength:116}
  },
  "Williamson": {
    perimeter: {dunk:141, layupClose:135, midrange:56, "3pt":25, dribble:67, steal:54, block:130, reb:107, contest:129, pass:56, vertical:142, movement:73, consistency:48, strength:140},
    interior: {dunk:141, layupClose:135, midrange:56, "3pt":25, dribble:67, steal:54, block:130, reb:107, contest:129, pass:56, vertical:142, movement:73, consistency:48, strength:140}
  },
  "Zhou Chang": {
    perimeter: {dunk:52, layupClose:134, midrange:123, "3pt":116, dribble:138, steal:65, block:39, reb:40, contest:84, pass:135, vertical:85, movement:114, consistency:99, strength:74},
    interior: {dunk:52, layupClose:134, midrange:123, "3pt":116, dribble:138, steal:65, block:39, reb:40, contest:84, pass:135, vertical:85, movement:114, consistency:99, strength:74}
  }
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
    perimeter: Object.fromEntries(stats.map(stat => [stat, 0])),
    interior: Object.fromEntries(stats.map(stat => [stat, 0]))
  });
  
  const [clothing, setClothing] = useState(
    Object.fromEntries(stats.map(stat => [stat, 0]))
  );
  
  const [runeCount, setRuneCount] = useState({});
  const [runeMods, setRuneMods] = useState(
    Object.fromEntries(stats.map(stat => [stat, 0]))
  );

  const loadCharacterDefaults = (characterName) => {
    const character = characterDefaults[characterName];
    if (character) {
      setBaseline({
        perimeter: {...character.perimeter},
        interior: {...character.interior}
      });
      setCharName(characterName);
    }
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
        {Object.entries(mods).map(([k, v]) => (
          <div key={k}>{k} {v}</div>
        ))}
      </div>
    ));
  };

  return (
    <div className="stat-calculator">
      <h1>DCD Build Calculator</h1>
      
      <div className="section">
        <h2>Character & Build Info</h2>
        <label>Name: <input value={charName} onChange={(e) => setCharName(e.target.value)} type="text" /></label><br/><br/>
        <label>Note: <input value={charNote} onChange={(e) => setCharNote(e.target.value)} type="text" style={{width: '80%'}} /></label><br/><br/>
        <label>Build Note: <input value={buildNote} onChange={(e) => setBuildNote(e.target.value)} type="text" style={{width: '80%'}} /></label><br/><br/>
        
        <label>
          Load Defaults: 
          <select 
            onChange={(e) => loadCharacterDefaults(e.target.value)}
            style={{ marginLeft: '10px', padding: '6px' }}
          >
            <option value="">Select a character</option>
            {Object.keys(characterDefaults).map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>
        
        <button className="secondary" onClick={() => document.getElementById('jsonInput').click()} style={{ marginLeft: '10px' }}>
          Import Build JSON
        </button>
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
        <h2>Clothing/Partners?</h2>
        <label><input type="radio" name="clothToggle" checked={showCloth} onChange={() => setShowCloth(true)} /> Yes</label>
        <label><input type="radio" name="clothToggle" checked={!showCloth} onChange={() => setShowCloth(false)} /> No</label>
        
        {showCloth && (
          <div id="clothSection">
            <h3>Clothes/Partner Stats</h3>
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
        <h2>Red Potential</h2>
        <div className="selected-list">
          {renderSelectedRunes('red')}
        </div>
        <div className="rune-section">
          {renderRuneButtons('red')}
        </div>
      </div>

      <div className="section">
        <h2>Green Potential</h2>
        <div className="selected-list">
          {renderSelectedRunes('green')}
        </div>
        <div className="rune-section">
          {renderRuneButtons('green')}
        </div>
      </div>

      <div className="section">
        <h2>Blue Potential</h2>
        <div className="selected-list">
          {renderSelectedRunes('blue')}
        </div>
        <div className="rune-section">
          {renderRuneButtons('blue')}
        </div>
      </div>

      <div className="section">
        <h2>{charName ? `${charName} Results` : 'Results'}</h2>
        <table className="result-table">
          <thead>
            <tr>
              <th>Stat</th>
              <th>Clothes</th>
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