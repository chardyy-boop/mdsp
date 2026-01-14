const questions = [
    {
        question: "1. Determine the estimated weight of an A-36 steel plate size 3/16 \" x 6' x 20'",
        options: ["919 lbs", "1012 lbs", "829 lbs", "735 lbs"],
        answer: 0
    },
    {
        question: "2. The minimum clearance allowed for meshing spur gears with a circular pitch of 0.1571 and diametral pitch of 20. The spur gear has 25 teeth.",
        options: ["0.007855", "0.008578", "0.007558", "0.007585"],
        answer: 0
    },
    {
        question: "3. A 3\"φ diameter short shaft carrying two pulleys close to the bearings transmit how much horsepower if the shaft makes 280 rpm?",
        options: ["199 Hp", "198 Hp", "200 Hp", "210 Hp"],
        answer: 0
    },
    {
        question: "4. What pressure is required to punch a hole 2\" diameter through a ¼\" steel plate?",
        options: ["10 tons", "20 tons", "30 tons", "40 tons"],
        answer: 3
    },
    {
        question: "5. Compute the working strength of 1\" bolt which is screwed up tightly in packed joint when the allowable working stress is 13,000 psi.",
        options: ["3600 lbs", "3950 lbs", "3900 lbs", "3800 lbs"],
        answer: 2
    },
    {
        question: "6. What is the working strength of a 2\" bolt which is screwed up tightly in a packed joint when the allowable working stress 12,000 psi?",
        options: ["20,120 lbs", "20,400 lbs", "20.400 lbs", "20,200 lbs"],
        answer: 2
    },
    {
        question: "7. Compute the speed of the gear mounted on a 52.5 mm diameter shaft receiving power from a driving motor with 250 hp.",
        options: ["2182 rpm", "2071 rpm", "2282 rpm", "2341 rpm"],
        answer: 2
    },
    {
        question: "8. The minimum whole depth of spur gear of 14-1/2 deg. involute type with diameter pitch of 24 and circular pitch of 0.1309:",
        options: ["0.09000", "0.09900", "0.089875", "0.089758"],
        answer: 2
    },
    {
        question: "9. Heating of the metal to a temperature above the critical temperature and then cooling slowly usually in the furnace to reduce the hardness and improve the machinability is called:",
        options: ["annealing", "tempering", "normalizing", "quenching"],
        answer: 0
    },
    {
        question: "10. What is the frictional HP acting on a collar loaded with 100 kg weight? The collar has an outside diameter of 100 mm and an internal diameter of 40mm. The collar rotates at 1000 rpm and the coefficient of friction between the collar and the pivot surface is 0.15.",
        options: ["0.8 HP", "0.5 HP", "0.3 HP", "1.2 HP"],
        answer: 0
    },
    {
        question: "11. A solid cylindrical shaft 48.2 cm long is used for a transmission of mechanical power at a rate of 37 KW running at 1760 rpm. The Ss is 8.13 MPa. Calculate the diameter",
        options: ["30 mm", "35 mm", "40 mm", "50 mm"],
        answer: 3
    },
    {
        question: "12. An internal gear is set up with a 5-in diameter pinion and center distance of 18 inches. Find the diameter of the internal gear.",
        options: ["36\"", "21.5\"", "26\"", "41\""],
        answer: 3
    },
    {
        question: "13. What force P is required to punch a ½ in. hole on a 3/8 in. thick plate if the ultimate shear strength of the plate is 42,000 psi?",
        options: ["24,940 lbs", "24,620 lbs", "24,960 lbs", "24,740 lbs"],
        answer: 3
    },
    {
        question: "14. A 2.5\" diameter by 2 in. long journal bearing is to carry a 5500-lb load at 3600 rpm using SAE 40 lube oil at 200°F through a single hole at 25 psi. Compute the bearing pressure.",
        options: ["1100 psi", "900 psi", "1000 psi", "950 psi"],
        answer: 0
    },
    {
        question: "15. In a uniformly loaded simple beam, the maximum vertical shearing force occurs",
        options: ["at the center", "at the section of maximum moment", "at beam bottom fiber", "at either end support"],
        answer: 3
    },
    {
        question: "16. A hollow shaft has an inner diameter of 0.035 m and outer diameter of 0.06 m. Determine the polar moment of inertia of the hollow shaft.",
        options: ["1.512 x 10-6 m4", "1.215 x 10-6 m4", "1.52 x 10-6 m4", "1.125 x 10-6 m4"],
        answer: 3
    },
    {
        question: "17. Determine the thickness of a steel air receiver with 30 inches diameter and pressure load of 120 psi, design stress of 8000 psi.",
        options: ["1/4 in.", "5/8 in.", "3/8 in.", "½ in."],
        answer: 0
    },
    {
        question: "18. A short 61 mm φ shaft transmits 120 Hp. Compute the linear speed of a pulley 55 cm φ mounted on the shaft.",
        options: ["1796 fpm", "1766 fpm", "1856 fpm", "2106 fpm"],
        answer: 2
    },
    {
        question: "19. A 2-in. solid shaft is driven by a 36-in. gear and transmits power at 120 rpm. If allowable shearing stress is 12 ksi, what horsepower can be transmitted?",
        options: ["29.89", "35.89", "38.89", "34.89"],
        answer: 1
    },
    {
        question: "20. Using oxyacetylene welding method to weld a 3 ft. long seam in a 3/8 in. thick plate at a consumption rate of 9 cu. ft. /ft. of weld for oxygen and 7 cu. ft./ft. for acetylene. What is the total combined gas consumption in cu. ft. ?",
        options: ["51", "48", "45", "55"],
        answer: 1
    },
    {
        question: "21. A coiled spring with 5 cm of outside diameter is required to work under the load of 190 N. The wire diameter is 5 mm, the spring is to have 6 active coils and the ends are to be closed and ground. Determine the total number of coils. The modulus of rigidity is 809 GPa and the mean radius is to be 23 mm, with 7 mm pitch of the spring.",
        options: ["6.5 coils", "7.5 coils", "8.5 coils", "9.5 coils"],
        answer: 2
    },
    {
        question: "22. A helical spring having squared and ground ends has a total of 18 coils and its material has modulus of elasticity in shear of 78.910 GPa. If the spring has an outside diameter of 10.42 cm and a wire diameter of 0.625 cm, compute in the spring due to a load of 50 kgs.",
        options: ["302 mm", "490 mm", "490 mm", "322 mm"],
        answer: 2
    },
    {
        question: "23. Design the size of solid steel shaft to be used for a 500 hp, 250 rpm application if the allowable torsional deflection is 1° and the allowable stress is 10,000 psi modulus of rigidity is 13 x 106 psi.",
        options: ["5\" dia.", "4-5/8\" dia.", "4-7/8\" dia.", "4-3//4\" dia."],
        answer: 2
    },
    {
        question: "24. With the electric are welding rate of 18 in./min, how long will it take to weld a ½ in. thick plate by 3 ft long seam?",
        options: ["3 min.", "2 min.", "1.5 min.", "4 min."],
        answer: 1
    },
    {
        question: "25. How long will it take to mill a 3/4 \" by 2\" long keyway in a 3\" diameter shafting with a 24 tooth cutter turning at 100 rpm and 0.005\" feed/tooth?",
        options: ["0.136 min.", "0.196 min.", "0.166 min.", "0.106 min."],
        answer: 2
    },
    {
        question: "26. How long will it take to saw a rectangular piece of aluminum plate 8 in. wide and 1 1/2 in. thick if the length of the cut is 8 in., the power hacksaw makes 120 rev/min and average feed per stroke is 0.0060 in.?",
        options: ["13.11", "11.11", "14.01", "12.03"],
        answer: 1
    },
    {
        question: "27. A cast iron flywheel is rotated at a speed of 1200 rpm and having a mean rim radius of 1 foot. If the weight of the rim is 30 lbs. what is the centrifugal force? Use factor C = 41.",
        options: ["14,800 lbs", "7 ft", "14,860 lbs", "14,760 lbs"],
        answer: 3
    },
    {
        question: "28. A steel cylindrical air receiver with 5 ft diameter and pressure load of 180 psi, design stress of 9500 psi maximum. The pressure vessel is to be provided with 1 ½ in. diameter drain valve installed at the bottom of the vessel and safety pressure relief valve installed either at the top most or at the side with pop – out rating of 200 psi. Assume a 100 % weld joint efficiency. The lap welding tensile strength is 65,000 psi. Determine the bursting pressure of this air receiver.",
        options: ["1154 psi", "1354 psi", "1454 psi", "1254 psi"],
        answer: 1
    },
    {
        question: "29. The tooth thickness of a gear is 0.5 inch and its circular pitch is 1.0 inch. Calculate the dedendum of the gear.",
        options: ["0.3183", "1.250", "0.3979", "0.1114"],
        answer: 2
    },
    {
        question: "30. A holllow shaft has an inner diameter of 0.035 m and an outer diameter of 0.06 m. Compute for the torque if the shear stress is not to exceed 120 MPa in Nm.",
        options: ["4500", "4100", "4300", "4150"],
        answer: 0
    },
    {
        question: "31. The path of contact in involute gears where the force/power is actually transmitted. It is a straight imaginary line passing through the pitch point and tangent to the base circle.",
        options: ["principal reference plane", "pitch point", "front angle", "line of action"],
        answer: 3
    },
    {
        question: "32. It is a problem of expansion and shrinkage of steel material so that the slightly bigger shafting of 2 \" diameter can be inserted / fitted to the slightly smaller hole of a steel bushing of 1.999 \" diameter with the following process/material/data to apply: Coefficient of expansion of carbon steel = 0.0000068 in/in F. Temperature raised by gas heating = 24.5 F. Cooling media to use dry ice with boiling point of -109.3 F (-78.5 C). Shrinkage rate below boiling point is 0.00073 in/in. Determine the final clearance between the expanded steel bushing hole against the shrinkage of the steel shaft.",
        options: ["0.000793 in.", "0.000693 in.", "0.000750 in.", "0.000800 in."],
        answer: 0
    },
    {
        question: "33. What modulus of elasticity in tension is required to obtain a unit deformation of 0.00105 m/m from a load producing a unit tensile stress of 44,000 psi?",
        options: ["42.300 x 106 psi", "41.202 x 106 psi", "43.101 x 106 psi", "41.905 x 106 psi"],
        answer: 3
    },
    {
        question: "34. Compute the pitch angle of a bevel gear given the pinion’s number of teeth of 14 and 42 teeth on the gear.",
        options: ["18.4°", "28.4°", "33.4°", "38.4°"],
        answer: 0
    },
    {
        question: "35. Compute for the tooth thickness of 141/2 spur gear with diameter pitch = 5.",
        options: ["0.3979", "3.1831", "0.03141", "0.31416"],
        answer: 3
    },
    {
        question: "36. What is the difference between a shaper and a planer?",
        options: ["the tool of the shaper moves while on the planer is stationary", "the shaper can perform slotting operation while the planer cannot", "the shaper handles large pieces while the planer handle only small pieces", "the tool of the shaper moves in reciprocating motion while the tool in the planer moves in rotary motion"],
        answer: 0
    },
    {
        question: "37. If the ultimate shear strength of a steel plate is 42,000 lb/in2, what force is necessary to punch a 0.75 inch diameter hole in a 0.625 inch thick plate?",
        options: ["63.008 lbs", "68,080 lbs", "61,800 lbs", "66,800 lbs"],
        answer: 2
    },
    {
        question: "38. A steel tie rod on bridge must be made to withstand a pull of 5000 lbs. Find the diameter of the rod assuming a factor of safety of 5 and ultimate stress of 64,000 lb/in2",
        options: ["0.75 in.", "0.71 in", "0.84 in.", "0.79 in."],
        answer: 1
    },
    {
        question: "39. If the weight of 6” diameter by 48” long SAE 1030 shafting is 174.5 kg. then what will be the weight of chromium SAE 51416 of same size?",
        options: ["305.5 lbs", "426.4 lbs", "384.6 lbs", "465.1 lbs"],
        answer: 2
    },
    {
        question: "40. Compute the circular pitch (in inch) of a pair of gears having a ratio of 4 and a center distance of 10.23. Each gear has 72 teeth and pinion has 18 teeth.",
        options: ["0.8095", "0.7825", "0.8035", "0.8085"],
        answer: 1
    },
    {
        question: "41. A journal bearing with diameter of 76.2 mm is subjected to a load of 4900 N while rotating at 200 rpm. If its coefficient of friction is 0.02 and L/D = 2.5, find its projected area in mm2.",
        options: ["12,090", "14,165", "13,050", "14,516"],
        answer: 3
    },
    {
        question: "42. A flywheel rotates at 120 rpm or 12.57 rad/sec slowed down to 102 rpm or 10.68 rad/sec during the punching operation that requires ¾ second of the punching portion of the cycle. Compute the angular acceleration of the flywheel in rad/sec2.",
        options: ["-2.52 rad/sec2", "3.15 rad/sec2", "-2.75 rad/sec2", "2.22 rad/sec2"],
        answer: 0
    },
    {
        question: "43. A drop hammer of 1 ton dead weight capacity is propelled down ward by a 12 in diameter cylinder. At 100 psi air pressure what is the impact velocity if the stroke is 28 inches?",
        options: ["63.2 fps", "15.8 fps", "31.6 fps", "47.4 fps"],
        answer: 2
    },
    {
        question: "44. Compute the nominal shear stress at the surface in MPa for a 40 mm diameter shaft that transmits 750 kW at 1500 rpm. Axial and bending loads assumed negligible. Torsional shearing stress is 28 N/mm2.",
        options: ["218", "312", "232", "380"],
        answer: 3
    },
    {
        question: "45. A truck skids to stop 60 m after the application of the brakes while travelling at 90 km/hr. What is the acceleration in m/sec2?",
        options: ["-5.21 m/s2", "6.36 m/s2", "-7.06 m/s2", "5.76 m/s2"],
        answer: 0
    },
    {
        question: "46. A spur pinion rotates at 1800 rpm and transmits to a mating gear 30 HP. The pitch diameter is 4” and the pressure angles pressure angle is 14 1/2. Determine the tangential load in lbs.",
        options: ["495", "525", "535", "475"],
        answer: 1
    },
    {
        question: "47. A high alloy spring having squared and ground ends and has a total of 16 coils and modulus of elasticity in shear of 85 GPa. Compute the Wahl factor. The spring outside diameter is 9.66 cm and wire diameter is 0.65 cm.",
        options: ["1.058", "1.10", "1.185", "1.2"],
        answer: 1
    },
    {
        question: "48. Two idlers of 28 T and 26 T are introduced between the 24 T pinion with a turning speed of 400 rpm driving a final 96 T gear. What would be the final speed of the driven gear and its direction relative to the driving gear rotation?",
        options: ["120 rpm and opposite direction", "100 rpm and opposite direction", "80 rpm and same direction", "100 rpm and same direction"],
        answer: 1
    },
    {
        question: "49. Compute the line shaft diameter to transmit 12 HP at 180 rpm with torsional deflection of 0.08 degrees per ft length.",
        options: ["3 in.", "5 cm", "2.35 in", "62 mm"],
        answer: 2
    },
    {
        question: "50. The allowable stresses that are generally used in practice are 4 ksi for main power transmitting shaft, 6 ksi for line shaft carrying pulleys and 8.5 ksi for small short shaft/countershaft, etc. With these allowable stresses what will be the simplified formula to determine transmitted HP, diameter of the shaft or even the rpm(N)?",
        options: ["HP=D3N/80", "HP=D3N/531/2", "all of these", "HP=D3N/38"],
        answer: 2
    },
    {
        question: "51. Calculate the rpm for machining a cast iron workpiece 6 inches in diameter. The lowest cutting speed for cast iron is 50 fpm.",
        options: ["35.3", "33.3", "43.3", "53.32"],
        answer: 1
    },
    {
        question: "52. A helical gear a 14 ½ 0 normal pressure angle and transverse diameter pitch of 2.3622 per cm. the helix angle is at 45°and has 8 teeth. Compute the transverse pressure angle in degrees.",
        options: ["22.2°", "19.3°", "18.9°", "20.1°"],
        answer: 3
    },
    {
        question: "53. Compute the maximum unit shear in a 3 inch diameter steel shafting that transmits 2400 in lb. of torque at 99 rpm.",
        options: ["4530 psi", "4250 psi", "3860 psi", "4930 psi"],
        answer: 0
    },
    {
        question: "54. To facilitate the milling (roughing) work of a cast steel material using material using a 11/2 inch diameter cutter choose between the two available stock. Find the speed of the cutter in rpm. -high speed steel cutter with a cutting speed of 50 fpm -carbide tipped cutter with a cutting speed of 200 fpm",
        options: ["389", "572", "509", "412"],
        answer: 2
    },
    {
        question: "55. The U.S standard gage for iron and steel was established in 1893 which is primarily a weight gage. The basis is the weight of wrought iron which is at _______ lbs. per cubic foot.",
        options: ["480", "493", "490", "488"],
        answer: 0
    },
    {
        question: "56. Calculate the cutting speed in fpm when spindle speed of a lathe is turning 8 inch diameter bronze casting using a spindle speed of 120 rpm.",
        options: ["220 fpm", "3016 fpm", "2510 fpm", "251 fpm"],
        answer: 3
    },
    {
        question: "57. The lathe compound is used for:",
        options: ["angle cutting", "grooving", "facing", "shaping"],
        answer: 2
    },
    {
        question: "58. If the ultimate shear stress of a 1/8 inch thick drawn steel plates is 35 ksi what force is required to punch a 1 1/2 inch diameter hole?",
        options: ["10.011 lbs", "22.322 lbs", "11 Mtons", "20620 lbs"],
        answer: 3
    },
    {
        question: "59. Brazing is more superior than soldering in joining metals because:",
        options: ["all of these", "molten metal flaws between joints because of capillary forces", "it has slight diffusion of metal involved", "higher melting temperature joining"],
        answer: 0
    },
    {
        question: "60. To finally complete milling (finishing) work of steel material the operator has the option to choose the better available cutter in stock and these are: -both 1 1/2 inch diameter -high speed steel with recommended cutting speed of 90 fpm -carbide tipped with cutting speed of 300 fpm Compute the rpm of the cutter",
        options: ["801", "620", "764", "264"],
        answer: 2
    },
    {
        question: "61. A ball is thrown vertically upward with a speed of 24.38 m/s. Then 2 seconds later a second ball is projected vertically upward too with a speed of 18.28 m/s. At what point above will they meet?",
        options: ["17.62m", "15.62 m", "16.62 m", "21.62 m"],
        answer: 2
    },
    {
        question: "62. Babbit bearing material maybe melted in a pouring ladle over an open fire. The temperature is about right when a wooden pine stick used for stirring chars but does not ignite and at that stage the molten metal temperature is in the vicinity of ________°F.",
        options: ["1010", "870", "760", "590"],
        answer: 1
    },
    {
        question: "63. The purpose of______is to prevent gears from jamming together and making contact on both sides of their teeth simultaneously",
        options: ["tooth fillet", "stress relieving", "backlash", "all of these"],
        answer: 2
    },
    {
        question: "64. Any internal/residual stress in a steel work can be remedied by:",
        options: ["tempering", "stress relieving", "annealing", "all of these"],
        answer: 3
    },
    {
        question: "65. The usual shrinkage allowance specified for patterns to compensate for the expected shrinking of cast steel parts construction of steel casting in cooling:",
        options: ["1/8 inch/ft", "3/16 inch/ft", "3/32 to 1/8 inch/ft", "5/32 to 7/32 inch/ft"],
        answer: 1
    },
    {
        question: "66. Choose the economical type of material for gears that give/sustain good operating quality/life for intended operation",
        options: ["plane carbon steel", "high alloy steel", "all of these", "heat treated carbon steel"],
        answer: 3
    },
    {
        question: "67. A material plane was subjected to a load. When the load was removed the strain disappeared. From the structural change which of the following can be considered about this material?",
        options: ["it does not follow Hooke’s Law", "it has high modules of elasticity", "it is elastic", "it is plastic"],
        answer: 2
    },
    {
        question: "68. Compute the power transmitted in HP by the shaft rotating 1200 rpm and subjected to torsional moment of 1200 MN.",
        options: ["202", "252", "150", "171"],
        answer: 0
    },
    {
        question: "69. Instantaneous center is also called___________",
        options: ["all of these", "virtual center", "centro", "rotopole"],
        answer: 1
    },
    {
        question: "70. What is the stress to strain ratio within the elastic limit?",
        options: ["elastic limit", "modulus of elasticity", "elasticity", "compressive ratio"],
        answer: 1
    },
    {
        question: "71. A spur pinion supported on each side by ball bearings rotates 1750 rpm and transmit to a mating gear at 25 Hp. The pressure angle is 20 degrees and the pitch diameter is 5. Determine the tangential load in lbs.",
        options: ["420", "300", "360", "400"],
        answer: 2
    },
    {
        question: "72. In a spring design, spring index of 7 through 9 is best 4 through 7 and 9 through 16 are often used but spring index of________should be avoided due to difficulties in making etc.",
        options: ["all of these", "less than 5", "5 or less", "4"],
        answer: 1
    },
    {
        question: "73. Allowance added in the casting pattern to compensate for the contraction of metal",
        options: ["tapering allowance", "shrinkage allowance", "finish allowance", "draft pattern"],
        answer: 1
    },
    {
        question: "74. Ratio of the angle of action to the pitch angle",
        options: ["contact ratio", "approach ratio", "ratio of gearing", "module"],
        answer: 0
    },
    {
        question: "75. General purpose grade of steel used for broiler plate, structurals etc. usually with carbon content of______.",
        options: ["0.20 to 0.30%C", "0.35 to 0.50%C", "all of these", "0 .15 to 0.25%C"],
        answer: 0
    },
    {
        question: "76. The angle made by the helix of the thread(in a straight thread) at the pitch diameter with a plane perpendicular to the axis called__________",
        options: ["angle of thread", "truncation", "lead angle", "lead"],
        answer: 2
    },
    {
        question: "77. The principle materials used in the production of metal working tools:",
        options: ["high carbon steel", "tungsten, silicon, hadfield Mn", "titanium, phosphorous", "vanadium, chromium, molybdenum"],
        answer: 0
    },
    {
        question: "78. In the interest of design simplification and good kinematic compromise bevel gears adopted a standard pressure angle of ___________degrees.",
        options: ["20°involute stub", "20°", "141/2 involute full depth", "171/2"],
        answer: 1
    },
    {
        question: "79. The property of material that relates the lateral strain to longitudinal strain.",
        options: ["stress", "strain", "Poisson’s circle", "endurance limit"],
        answer: 2
    },
    {
        question: "80. Also called eccentrically loaded bearing is ________.",
        options: ["full bearings", "offset bearing", "partial bearing", "fitted bearings"],
        answer: 1
    },
    {
        question: "81. In the selection of wire rope, regular lay means wires and strands are arranged in the following manner:",
        options: ["twisted in the same direction", "twisted in any direction", "twisted in opposite direction", "twisted in along direction"],
        answer: 2
    },
    {
        question: "82. In involute teeth, the pressure angle is often defined as the angle between the line of action and the line of tangent to the pitch circle. It is also termed as-",
        options: ["helix angle", "angle of recess", "Angle of obliquity", "Arc of action"],
        answer: 2
    },
    {
        question: "83. A lineshaft runs at 360 rpm. An 18” pulley on the same shaft is belt connected to a 12” pulley on the countershaft. From a 15” pulley on the countershaft motion is transmitted to the machine. Compute/check the required of the pulley on the machine to give a spindle speed of 660 rpm.",
        options: ["16”", "12 1/4”", "101/2”", "81/2”"],
        answer: 1
    },
    {
        question: "84. Height of tooth above pitch circle or the radial distance between pitch circle and top land of the tooth.",
        options: ["top root", "addendum", "land", "hunting tooth"],
        answer: 1
    },
    {
        question: "85. The function of clutch in the machine tool is?",
        options: ["lowering of drive speed", "to disconnect or connect at will the drive", "alignment of drive shaft", "to insure that two shaft line up at high speed"],
        answer: 1
    },
    {
        question: "86. It is generally recommended and normal for a designer to add a hunting tooth to evenly distribute the wear on meshing teeth like a 53 teeth gears mesh with 30 teeth pinion. Find the rotation of pinion to mesh with same pair of teeth again",
        options: ["120", "81", "61", "53"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestionNum = document.getElementById('total-question-num');
const progressBar = document.getElementById('progress-bar');

const finalScore = document.getElementById('final-score');
const scoreCircleContainer = document.getElementById('score-circle-container');
const verdictLabel = document.getElementById('verdict-label');
const correctCount = document.getElementById('correct-count');
const totalCount = document.getElementById('total-count');
const resultMessage = document.getElementById('result-message');
const startHighScore = document.getElementById('start-high-score');
const resultHighScore = document.getElementById('result-high-score');

// Initialize
const PASSING_GRADE = 70;
let highScore = localStorage.getItem('engQuizHighScore') || 0;
startHighScore.innerText = highScore;
totalQuestionNum.innerText = questions.length;

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');

    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');

    currentQuestionIndex = 0;
    score = 0;
    // Fisher-Yates Shuffle for random question order (Optional, but good for drilling)
    // Uncomment next line to randomize questions
    // questions.sort(() => Math.random() - 0.5); 

    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.question;
    optionsContainer.innerHTML = '';

    // Update Progress
    currentQuestionNum.innerText = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Reset Next Button
    nextBtn.classList.add('hidden');

    // Create Options
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.dataset.index = index;
        btn.onclick = () => selectOption(btn, index, q.answer);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedBtn, selectedIndex, correctIndex) {
    // Disable all buttons
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    // Check Answer
    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        // Highlight correct answer
        buttons[correctIndex].classList.add('correct');
    }

    nextBtn.classList.remove('hidden');
    // Update progress bar to completed state for this step
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function showResults() {
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');

    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');

    const percentage = Math.round((score / questions.length) * 100);
    finalScore.innerText = percentage;
    correctCount.innerText = score;
    totalCount.innerText = questions.length;

    // Handle High Score
    if (percentage > highScore) {
        highScore = percentage;
        localStorage.setItem('engQuizHighScore', highScore);
        resultMessage.innerText = "New High Score! Congratulations!";
    } else {
        if (percentage >= 90) {
            resultMessage.innerText = "Excellent! You are a master.";
        } else if (percentage >= 70) {
            resultMessage.innerText = "Great job! Keep practicing.";
        } else if (percentage >= 50) {
            resultMessage.innerText = "Good effort. Review the weak spots.";
        } else {
            resultMessage.innerText = "Keep studying! You can do better.";
        }
    }
    resultHighScore.innerText = highScore;

    // Pass/Fail Visuals
    scoreCircleContainer.classList.remove('pass', 'fail');
    verdictLabel.classList.remove('pass', 'fail');

    if (percentage >= PASSING_GRADE) {
        scoreCircleContainer.classList.add('pass');
        verdictLabel.classList.add('pass');
        verdictLabel.innerText = "PASSED";
    } else {
        scoreCircleContainer.classList.add('fail');
        verdictLabel.classList.add('fail');
        verdictLabel.innerText = "FAILED";
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');

    startScreen.classList.remove('hidden');
    startScreen.classList.add('active');
    startHighScore.innerText = highScore;
}
