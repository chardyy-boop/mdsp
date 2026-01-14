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
    },
    {
        question: "87. The shaft whose torque varies from 2000 to 6000 in lbs has 1 1/2 in in diameter and 60000 psi yield strength. Compute for the shaft mean average stress.",
        options: ["6036 psi", "6810 psi", "5162 psi", "5550 psi"],
        answer: 0
    },
    {
        question: "88. The angle made by the helix of the thread (in a straight thread) at the pitch diameter with a plane perpendicular to the axis is called__________.",
        options: ["lead angle", "truncation", "lead", "angle of thread"],
        answer: 0
    },
    {
        question: "89. The rule of thumb in journal bearing design; the clearance ratio/clearance should be.",
        options: ["0.0090", "0.0042", "0.0010", "0.00120"],
        answer: 2
    },
    {
        question: "90. The moment of inertia of a rectangle whose base is “b” height “h” about its base is",
        options: ["bh3/4", "bh3/12", "bh3/24", "bh3/3"],
        answer: 3
    },
    {
        question: "91. Cold rolled shafting is not available in diameter larger than__________",
        options: ["6 inches", "5 inches", "6 ½ inches", "5 ½ inches"],
        answer: 1
    },
    {
        question: "92. What power would a spindle 55 mm in diameter transmit at 480 rpm. Stress allowed for short shaft is 59 newtons/mm2",
        options: ["45.12 kw", "50.61 kw", "45 Hp", "39.21 kw"],
        answer: 0
    },
    {
        question: "93. The cast iron flywheels are commonly designed with a factor of safety of______",
        options: ["14 to 15", "10 to 13", "8 to 9", "6 to 12"],
        answer: 1
    },
    {
        question: "94. A pair of equal and opposite (not collinear) forces that tend cause a rotation of a body",
        options: ["couple", "centroids", "equilibrium", "vector"],
        answer: 0
    },
    {
        question: "95. The ratio of the pitch diameter in inches to the number of teeth",
        options: ["pitch circle", "English module", "module", "pitch diameter"],
        answer: 1
    },
    {
        question: "96. When the motion is diminished/decreasing instead of increasing is called.",
        options: ["deceleration", "uniform negative impulse", "retarded motion", "all of these"],
        answer: 2
    },
    {
        question: "97. _______is a unit or energy?",
        options: ["ft.-lb.", "hp", "BTU/hr.", "watt"],
        answer: 0
    },
    {
        question: "98. When high strength and durability are a requirements for choosing gear materials it is preferable to use_________material",
        options: ["hardened bronze", "steel", "phenolic laminated", "white iron"],
        answer: 1
    },
    {
        question: "99. _________forces when action are parallel",
        options: ["couple", "non collinear", "resultant", "non concurrent"],
        answer: 3
    },
    {
        question: "100. The product of the mass and the velocity of the center of gravity of the body is called.",
        options: ["linear momentum", "angular impulse", "linear impulse", "angular momentum"],
        answer: 0
    },
    {
        question: "101. Two parallel shaft connected by pure rolling turn in the same direction and having a speed ratio of 2.75. what is the distance of the two shaft if the smaller cylinder is 22 cm. in diameter.",
        options: ["16.60 cm", "30.25 cm", "25.25 cm", "19.25 cm"],
        answer: 3
    },
    {
        question: "102. The distance between similar, equally-spaced tooth surfaces in a given direction and along a given line.",
        options: ["pitch circle", "pitch plane", "pitch", "pitch diameter"],
        answer: 2
    },
    {
        question: "103. A drop hammer of 1 ton dead weight capacity is propelled downward by a 12 inch diameter cylinder. At 100 psi air pressure what is the impact velocity if the stroke is 28 inches?",
        options: ["47.4 ft/sec", "31.6 ft/sec", "15.8 ft/sec", "63.2 ft/sec"],
        answer: 1
    },
    {
        question: "104. Could be defined as simply push and pull.",
        options: ["power", "inertia", "work", "force"],
        answer: 3
    },
    {
        question: "105. Opposite directional forces equal in magnitude and parallel is called_________",
        options: ["non coplanar", "centroid", "couple", "coplanar"],
        answer: 2
    },
    {
        question: "106. Quantities such as time , volume and density are completely specified when their magnitude is known is also called",
        options: ["couple", "resultants", "components", "scalar"],
        answer: 3
    },
    {
        question: "107. The use of hardened steel for the mating metal gear appears to give the best results and longer operational life. The usual hardness is in the range of-",
        options: ["over 600 BHN", "300 to 400 BHN", "below 350 BHN", "over 400 BHN"],
        answer: 0
    },
    {
        question: "108. _______is the product of the resultant of all forces acting on a body and the time.",
        options: ["linear momentum", "linear impulse", "angular momentum", "all of these"],
        answer: 1
    },
    {
        question: "109. The separate forces which can be so combined are called",
        options: ["concurrent forces", "non concurrent forces", "couple", "component forces"],
        answer: 3
    },
    {
        question: "110. Continuous stretching under load even if the stress is less than the yield point",
        options: ["plasticity", "elasticity", "creep", "ductility"],
        answer: 2
    },
    {
        question: "111. The most known lubricants being utilized in whatever category of load and speed are oil, air, grease and dry lubricants like",
        options: ["bronze", "lead", "silicon", "graphite"],
        answer: 3
    },
    {
        question: "112. A coupling that allows axial flexibility/movement in the operation. Made of alternate bolting of steel, leather, fabric and/or plastic material into the two flanges",
        options: ["Flexible disk coupling", "flexing Oldham coupling", "Flexible toroidal spring coupling", "Elastic-material bonded coupling"],
        answer: 0
    },
    {
        question: "113. It consists of two cranks, a stationary piece called the line of centers and the connecting rod is a",
        options: ["five-bar linkage", "four-crank braces", "three-crank linkage", "four-bar linkage"],
        answer: 3
    },
    {
        question: "114. Used to change rotary motion to reciprocating motion____________",
        options: ["rack gears", "hypoid gears", "Helical gears", "herringbone gears"],
        answer: 0
    },
    {
        question: "115. The effective face width of a helical gear divided by gear axial pitch",
        options: ["approach ratio", "Arc of action", "Arc of recess", "Face overlap"],
        answer: 0
    },
    {
        question: "116. Pitch diameter less the diameter of the roller chain is equal to:",
        options: ["top land", "bottom diameter", "addendum", "Face overlap"],
        answer: 1
    },
    {
        question: "117. Generally applied on speed reducer due to large speed ratio:",
        options: ["bevel gears", "helical gears", "worm gears", "hypoid gears"],
        answer: 2
    },
    {
        question: "118. If shaft size is specified as-diameter 2.00” max. and 1.99” min. in diameter then the 0.010” could be defined as________",
        options: ["allowance", "fit", "variance", "tolerance"],
        answer: 3
    },
    {
        question: "119. A material plane was subjected to a load. When the load was removed the strain disappeared. From the structural change which of the following can be considered about this material?",
        options: ["it has high modules of elasticity", "it does not follow Hooke’s Law", "it is plastic", "it is elastic"],
        answer: 3
    },
    {
        question: "120. Helix angle in the range of ______ degree is recommended for wide-face helical gears",
        options: ["less than 15", "less than 20", "20 to 35", "20 to 22"],
        answer: 0
    },
    {
        question: "121. A step shaft made of SAE 1117 steel with an ultimate strength of 69.7 ksi. The notch sensitivity factor is 0.983 and 0.00435 is the constant dependent upon the ultimate strength check the radius of the stress raiser.",
        options: ["0.192", "0.386", "0.25", "0.775"],
        answer: 2
    },
    {
        question: "122. Difference between maximum material limits of mating parts . Or it is a minimum clearance or maximum interference between parts",
        options: ["tolerance", "fits", "variance", "allowance"],
        answer: 3
    },
    {
        question: "123. The changes in shape or geometry of the body due to action of a force on it is called deformation or _____",
        options: ["shear stresses", "stresses", "compressive stress", "strains"],
        answer: 3
    },
    {
        question: "124. For an evenly distributed and uniform wear on each meshing gear tooth, the ideal design practice is to consider a______________",
        options: ["wear resistance alloy addition to tooth gears", "heat treatment of the gears", "hardening of each tooth", "hunting tooth addition"],
        answer: 3
    },
    {
        question: "125. The reciprocal of a diametral pitch or the ratio of the pitch diameter to the no. of teeth",
        options: ["lead", "involute", "module", "clearance"],
        answer: 2
    },
    {
        question: "126. Ability to resist deformation under stress",
        options: ["plasticity", "all of these", "stiffness", "toughness"],
        answer: 2
    },
    {
        question: "127. Flat leather belting not recommended for used in a speed in excess of____fpm.",
        options: ["3600", "4800", "6000", "all of these"],
        answer: 2
    },
    {
        question: "128. The angle included between the sides of the thread measured in an axial plane in a screw thread",
        options: ["angle of thread", "Angle between thread or 40", "Helix angle thread", "Half angle thread or 20°"],
        answer: 0
    },
    {
        question: "129. An elastic body whose primary function is to deflect under load",
        options: ["clutch", "stopper", "brake", "spring"],
        answer: 3
    },
    {
        question: "130. Determine the estimated weight of a ¾” x 6’ x 20’ steel plate",
        options: ["1809 kgs", "1490 kgs", "1709 kgs", "1666 kgs."],
        answer: 3
    },
    {
        question: "131. Steel plates allowable tensile strength",
        options: ["396.41 N/m2", "296.12 N/m2", "379.31 N/m2", "310.11 N/m2"],
        answer: 0
    },
    {
        question: "132. Poisson’s Ratio is the ratio of",
        options: ["elastic limit to yield strength", "lateral deformation to the longitudinal deformation", "shear strain to unit strain", "elastic limit to shear strength"],
        answer: 1
    },
    {
        question: "133. Manganese steel standard designation, SAE_______",
        options: ["13xx", "10xx", "11xx", "8xx"],
        answer: 0
    },
    {
        question: "134. One of these materials is not a structural steel?",
        options: ["low carbon steel", "tool and die steel", "stainless steel", "medium carbon steel"],
        answer: 1
    },
    {
        question: "135. Determine the torque received by the motor shaft running at 4250 rpm. Transmitting 11 Hp, through a 10 in diameter 20° involute gear. The shaft is supported by ball bearings at both ends and the gear is fixed at the middle of 8” shaft length",
        options: ["163 in lb.", "167 in. lb", "132 in. lb.", "138 in. lb."],
        answer: 0
    },
    {
        question: "136. The ratio of moment of inertia on a cross-section of a beam to this section modulus is",
        options: ["a measure of distance", "equal to the radius of gyration and compression", "multiplied by the bending moment of inertia to determine the yield stress", "equal to the area of the cross-section and tension"],
        answer: 0
    },
    {
        question: "137. The SAE 2340 shafting contain___________% Nickel",
        options: ["3.85 Ni", "4% Ni", "3.25 to 3.75 % Ni", "3.84% Ni"],
        answer: 2
    },
    {
        question: "138. Chromium steel standard designation SAE___________",
        options: ["92xx", "5xxx", "3xxx", "11xx"],
        answer: 1
    },
    {
        question: "139. Alloy that improves strength of steel at high temperature application",
        options: ["aluminum", "manganese", "silicon", "chromium"],
        answer: 3
    },
    {
        question: "140. When an air entraintment agent is put into a concrete mix",
        options: ["the water/cement ratio must be reduced", "the strength will decrease", "minimal effect", "the strength will suffer up to 50%"],
        answer: 1
    },
    {
        question: "141. In general, alloys with high nickel content retain toughness to quiet low temperatures up to ______ oF.",
        options: ["-380", "-400", "-260", "-320"],
        answer: 3
    },
    {
        question: "142. The differential of the shear equation is the ______ .",
        options: ["deflection of the beam", "comprehensive strength of the beam", "tensile strength of beam", "load on the beam"],
        answer: 3
    },
    {
        question: "143. It is recommended not to have a direct drive between driven and drive sprockets if the ratio of their teeth exceeds _______. Use 2 or more step combination.",
        options: ["10 times", "8 times", "5 times", "6 times"],
        answer: 1
    },
    {
        question: "144. The length of the hub should not be made lesser than the face width of the gear. Hub lengths usually vary from 1 25D to 2D where d is the shaft diameter. The reasonable diameter of steel hub should be-",
        options: ["2D", "1.8 D", "1.55 D", "1.20 D"],
        answer: 1
    },
    {
        question: "145. Length of contact between two mating parts in a screw and nut threads measured axially is termed______.",
        options: ["Length of Engagement", "Axis of contact", "Arc of contacts", "Depth of Engagement"],
        answer: 0
    },
    {
        question: "146. The sum of their addendums and dedendums",
        options: ["whole depth", "full depth", "width of space", "working depth"],
        answer: 0
    },
    {
        question: "147. Stresses that are independent of loads is called__________",
        options: ["working stress", "residual stresses", "simple stress", "combined stress"],
        answer: 1
    },
    {
        question: "148. Material having a high electrical resistance and should not be used as conductor of electrical current",
        options: ["nickel", "aluminum oxide", "silicon base alloys", "iron oxide"],
        answer: 0
    },
    {
        question: "149. The best materials for brake drums is______.",
        options: ["aluminum", "cast iron", "steel material", "wrought iron"],
        answer: 1
    },
    {
        question: "150. The alloy materials used in the production of metal working tools",
        options: ["titanium, phosphorous", "tungsten, silicon, hadfield mn", "vanadium, chromium, molybdenum", "high carbon steel"],
        answer: 3
    },
    {
        question: "151. Torsional deflection is a significant consideration in the design of shaft and the limit should be in the range of_____________degree/foot of length",
        options: ["0.4 to 1", "0.1 to 1", "0.08 to 1", "0.6 to 1"],
        answer: 2
    },
    {
        question: "152. If the pitch of a screw is 2/9 find the thread per inch",
        options: ["0.34", "4.5", "5.4", "17"],
        answer: 1
    },
    {
        question: "153. The property that characterizes a material’s ability to be drawn into a wire",
        options: ["tensile strength", "ductility", "endurance limit", "thermal conductivity"],
        answer: 1
    },
    {
        question: "154. For steel shafting design in an average condition the maximum distance in feet between bearing to avoid excessive linear deflection is by formulas- L=8.95 3 2D or 8.95 D2/3 for shaft subjected to no bending except its own weight but for shafting with bending action of pulleys etc. the formula then will be L=",
        options: ["4 D2/3", "7.0 D 2/3", "5.2 D2/3", "6.0 D2/3"],
        answer: 2
    },
    {
        question: "155. Which of the phases of steel elements has a face-centered cubic structure?",
        options: ["pyrite", "austenite", "all of these", "cementite"],
        answer: 1
    },
    {
        question: "156. Steel spring material is usually hardened to 400 to 500 BHN and the carbon content is in the range of____",
        options: ["0.50 to 0.90 %", "all of these", "0.45 to 0.48", "0.96 to 0.97"],
        answer: 0
    },
    {
        question: "157. Principal stresses occur on these plane",
        options: ["which are subjected to ultimate tension", "which are subjected to maximum compression", "The shearing stress is zero", "which are 45° apart"],
        answer: 2
    },
    {
        question: "158. The property of material wherein the content is continuously distributed through its entire mass",
        options: ["plasticity", "malleability", "homogeneity", "all of these"],
        answer: 2
    },
    {
        question: "159. The properties of metal to withstand loads without breaking down is",
        options: ["elasticity", "strength", "plasticity", "strain"],
        answer: 1
    },
    {
        question: "160. Shafts readily available in the market are made in many ways and wide variety of material composition. It is likely be cold drawn carbon steel in size smaller than __________inches diameter",
        options: ["3.75", "4", "5", "5 ½"],
        answer: 0
    },
    {
        question: "161. Plain carbon steel standard designation SAE________",
        options: ["6xxx", "13xx", "10xx", "2xxx"],
        answer: 2
    },
    {
        question: "162. If the inertia is 90 lb. ft2 and the speed of the driven shaft is to be increased from 0 to 2500 rpm in 5 seconds, shaft material is of SAE 4140 with yield strength of 110000 lbs./in2, find the clutch starting torque in in. lb ft.",
        options: ["159", "128", "146", "191"],
        answer: 2
    },
    {
        question: "163. The rigidity of polymer can be increased by",
        options: ["fumace melting", "normalizing", "crystallization", "shot opening"],
        answer: 2
    },
    {
        question: "164. The difference between cast steel and cast iron",
        options: ["all of these", "cast steel has usually less than 1 %", "while cast iron has 2% or 3.6% carbon range", "cast iron has lower strength more brittle and has lower ductility than cast steel"],
        answer: 3
    },
    {
        question: "165. It is a general practice to use the following allowable stresses 4000 psi for maintransmitting shaft and 8500 psi for small short shafts and counter shaft . for lineshaft carrying pulley it is______psi",
        options: ["7800", "7000", "6000", "6500"],
        answer: 2
    },
    {
        question: "166. How many 5/16 inch holes can be punch in one motion in a steel plate made of SAE 1010 steel 7/16 inch thick using a force of 55 tons. The ultimate strength for shear is 50 ksi and use 2 factor of safety",
        options: ["5.8", "3.7", "5", "6.5"],
        answer: 2
    },
    {
        question: "167. Drilling machine cannot do-",
        options: ["reaming", "spot facing", "lapping", "broaching"],
        answer: 1
    },
    {
        question: "168. Material charges in foundry melting operation are composed of",
        options: ["limestone, foundry coke and silica sand", "steel scrap alloys and charcoal/foundry coke", "iron ore, quartz and charcoal", "scrap wood alloys and limestone"],
        answer: 0
    },
    {
        question: "169. ________is a work-supporting device which is bolted to the saddle of the lathe machine. It travels with the cutting tool it is a prevention of the springing away of the workpiece from cutting tools",
        options: ["rubber-flex collets", "tool post", "follower rest", "carriage stop"],
        answer: 2
    },
    {
        question: "170. Almost always the soldering materials are a combination of the following alloys",
        options: ["all of these", "lead & tin", "tin & antimony", "lead & antimony"],
        answer: 1
    },
    {
        question: "171. The most popular of all soldering materials in use has composition of.",
        options: ["45/55% tin & lead", "50/50% tin & lead", "all of these", "60/40% tin & lead"],
        answer: 1
    },
    {
        question: "172. The relative strength of a butt welding could be safety assumed as____% efficiency.",
        options: ["95", "98", "90", "92"],
        answer: 2
    },
    {
        question: "173. Which of the following raw materials are used in the foundry molding operation?",
        options: ["silica sand, bentonite, flour/paste water", "silica sand paste,graphite electrode", "silica sand and paste", "silica sand, linseed oil, flour"],
        answer: 0
    },
    {
        question: "174. The following are parts of a micrometer caliper except for",
        options: ["thimble", "head screw", "spindle", "anvil"],
        answer: 1
    },
    {
        question: "175. To avoid brittleness of weld or the residual stress in the welding it is normally stress relieved of___",
        options: ["normalizing", "tempering", "flame hardening", "annealing"],
        answer: 1
    },
    {
        question: "176. Steel with certain % of carbon maximum can readily be welded by all process and the resulting strength of the portion welded is as strong as the base material",
        options: ["0.15% C max", "0.35 % C max", "0.25 % C max", "0.30%C max"],
        answer: 3
    },
    {
        question: "177. A kilowatt is equal to_________",
        options: ["8851.2 in-lb/sec.", "1140 joule/sec.", "57 BTU/min", "44.200 ft.-lb./min."],
        answer: 2
    },
    {
        question: "178. Molybdenum-chromium-nickel steel designation",
        options: ["SAE48xx", "SAE43xx", "SAE56xx", "SAE46xx"],
        answer: 1
    },
    {
        question: "179. Single forces which produces the same effect upon a mass replacing two or more forces acting together is called",
        options: ["vector", "resultant", "component of forces", "resolution"],
        answer: 1
    },
    {
        question: "180. Permissible variation of the manufactured/machined dimension is called ___________",
        options: ["intolerance fits", "deviation", "allowance", "tolerance"],
        answer: 3
    },
    {
        question: "181. Peculiar strength of the metal to resist being crushed",
        options: ["shear strength", "ultimate strength", "compressive strength", "elastic limit"],
        answer: 2
    },
    {
        question: "182. What pressure is required for punching a hole 2” dia thru ¼” steel plates?",
        options: ["40 tons", "50 tons", "45 tons", "35 tons"],
        answer: 0
    },
    {
        question: "183. What is the working strength of a 2” bolt which is screwed up tightly in a packed joint when the allowable working stress is 12,000 psi",
        options: ["20.4 ksi", "22.4 ksi", "23.4 ksi", "18 ksi"],
        answer: 0
    },
    {
        question: "184. Determine the bursting steam pressure of a steel shell with diameter of 10 inches and made of ¼ thick steel plate. The joint efficiency is at 70% and the tensile strength is 60 ksi",
        options: ["4200 psi", "10.5 ksi", "42.8 ksi", "8500 psi"],
        answer: 0
    },
    {
        question: "185. Commonly used by steel melter as deoxidizer because of its easy availability and cheap price",
        options: ["silicon", "aluminum", "zinc", "manganese"],
        answer: 1
    },
    {
        question: "186. Curve formed by the path of a point on a straight line as it rolls along a convex base curve. The base curve is usually a circle and generally used as the profile of gear tooth.",
        options: ["axial plane", "involute", "arc or recess", "arc of action"],
        answer: 1
    },
    {
        question: "187. Resultant of two or more component forces is called___________",
        options: ["composition of forces", "resultant", "component", "collinear of forces"],
        answer: 0
    },
    {
        question: "188. A material having a high electrical resistance and should not be used for conductor of electric current",
        options: ["alloyed magnesium", "silicon base alloy", "nickel", "zinc"],
        answer: 2
    },
    {
        question: "189. A radian is equal to_________",
        options: ["57.020°", "57.706°", "57.296°", "57.190°"],
        answer: 2
    },
    {
        question: "190. It improves red hardness of steel",
        options: ["silicon", "lead", "cobalt", "manganese"],
        answer: 2
    },
    {
        question: "191. Designated pipe color used in communication",
        options: ["silver gray", "aluminum gray", "bare", "white"],
        answer: 3
    },
    {
        question: "192. The design stress and factor of safety are related in the following manner",
        options: ["design stress = ultimate stress/ factor of safety", "ultimate stress = factor of safety / design stress plus concentration factor", "factor of safety = design stress / ultimate stress", "design stress = factor of safety / times stress concentration factor"],
        answer: 0
    },
    {
        question: "193. Not adaptable to welding due to low tensile strength and poor ductility etc",
        options: ["copper parts", "cast iron materials", "aluminum parts", "bronze parts"],
        answer: 2
    },
    {
        question: "194. Bearing surface that completely surrounds the journal is also called_______",
        options: ["offset bearing", "full bearing", "centrally loaded bearing", "babbit bearing"],
        answer: 1
    },
    {
        question: "195. The purpose of lubrication is as mentioned except",
        options: ["to lighten the load", "prevent corrosion/oxidation", "prevent adhesion", "cool the moving elements"],
        answer: 0
    },
    {
        question: "196. Tools usually used in wood pattern making in foundry shop.",
        options: ["saws and chisels", "band saw", "knives and drills", "drill machine"],
        answer: 0
    },
    {
        question: "197. ________is a plane perpendicular to the axial plane and to the pitch plane in gears the parallel axes; and the plane of rotating coincide",
        options: ["tangent plane", "straight plane", "transverse", "reference plane"],
        answer: 2
    },
    {
        question: "198. A 36 tooth pinion with a turning speed of 300 rpm drives 120 tooth gear of 14 ½ degrees involute full depth pressure angle . What would be the speed of the driven gear?",
        options: ["1000 rpm", "100 rpm", "90 rpm", "140 rpm"],
        answer: 2
    },
    {
        question: "199. Several force which can be combined is called.",
        options: ["resultants", "composition of forces", "components", "collinear forces"],
        answer: 2
    },
    {
        question: "200. The surface along the fillet curves or between the fillets radius of the two adjacent tooth or a gear",
        options: ["bottom land", "flank", "fillet", "top land"],
        answer: 0
    },
    {
        question: "201. Ideal herringbone gear helix is in the range of__________",
        options: ["30 to 45", "35 to 50", "25 to 30", "15 to 20"],
        answer: 0
    },
    {
        question: "202. The lack of backlash in a spur gear design/operation may result to __________",
        options: ["overloading", "jamming", "all of these", "overheating"],
        answer: 2
    },
    {
        question: "203. The distance from a point on a screw thread to a corresponding point on the next thread measure along the axis",
        options: ["flank", "lead", "crest", "pitch"],
        answer: 3
    },
    {
        question: "204. As recommended the center to center distance between sprockets should not be less than ____ times the bigger sprocket",
        options: ["2.216", "1 3/4", "1 1/2", "2.59"],
        answer: 2
    },
    {
        question: "205. Machine shop instrument for checking the flatness of plane surfaces to 10ths of thousandths of a centimeter",
        options: ["blade type micrometer", "dial caliper", "planimeter", "micrometer"],
        answer: 2
    },
    {
        question: "206. Molybdenum steel standard designation SAE___________",
        options: ["88xx", "48xx", "40xx", "46xx"],
        answer: 2
    },
    {
        question: "207. Determine the minimum mean diameter of a taper pin for use to fix a lever to a shaft if it is transmit a max torque of 700 in-lbs. The shaft diameter is 2 inches and the material allowable stress is 15000 psi. Use factor of safety of 2.",
        options: ["7.0 mm", "7.2 mm", "5.2 mm", "6.2 mm"],
        answer: 3
    },
    {
        question: "208. Recommended design practice for steel lineshafting to limit the linear deflection to ________inch/foot of length (maximum)",
        options: ["0.020", "0.010", "0.012", "0.15"],
        answer: 1
    },
    {
        question: "209. A link has a load factor of 0.8 the surface factor of 0.8 ; the surface factor is 0.92 and the endurance strength is 28000 psi. Compute the alternating stress of the link if it is subjected to a reversing load. Assume a factor of safety of 3.",
        options: ["8150", "10920", "9,333", "7260"],
        answer: 2
    },
    {
        question: "210. Big chain sprocket wheels are designed with spokes/arms are generally elliptical in cross section with major axis _______times the minor axis",
        options: ["2", "2 ½", "1 ½", "3"],
        answer: 0
    },
    {
        question: "211. For acceptable ideal range of tightness which may result from the application of specific combination of allowances and tolerances.",
        options: ["allowance limit", "tolerance limit", "interference", "Fit"],
        answer: 3
    },
    {
        question: "212. Determine the safe wall thickness of a 30 inches steel tank with internal pressure of 7.82 MPa. The yield stress of material is at 275.48 MPa. The factor of safety to use is 2.0.",
        options: ["¾ inch", "232.6 cm", "21.6 mm", "5/8 inch"],
        answer: 2
    },
    {
        question: "213. The recommended center distance of sprockets should not be less than _________ times the diameter of bigger sprocket",
        options: ["1.75", "2", "1 ½", "2 ¼"],
        answer: 2
    },
    {
        question: "214. An occupant moves toward the center of a merry go around at 6 meters/sec. If the merry go round rotates at 6 rev./min. Compute the acceleration component of the occupant normal to the radius",
        options: ["6.79", "8.29", "7.54", "6.11"],
        answer: 2
    },
    {
        question: "215. The absolute viscosity of the fluid divided by its density expressed in same term of units is also called_________",
        options: ["centistokes", "kinematic viscosity", "Petroffs equation", "light petroleum oil"],
        answer: 1
    },
    {
        question: "216. Find the tooth thickness on the tooth circle of a 20 degree full depth in volute tooth having a diametral pitch of 3, circular pitch of 1.0472 and whole depth of tooth at 0.60.",
        options: ["10.7 mm", "13.2 mm", "10.1 mm", "7.9 mm"],
        answer: 1
    },
    {
        question: "217. It is required that pipes bigger than ________mm. should not be screwed but flanged",
        options: ["76.2", "63.5", "2 ¼ inch", "68.5"],
        answer: 1
    },
    {
        question: "218. An eyebolt is lifting a block weighing 350 lbs. The eyebolt is of SAE C 1040 material with Su = 67 ksi and S2 = 55 ksi what is the stress area (in inches square) of the bolt if it is under the unified coarse series thread?",
        options: ["1341", "0.1134", "0991", "1043"],
        answer: 1
    },
    {
        question: "219. Formed by the intersection of the adjacent flanks of adjacent threads when extended is called.",
        options: ["crest apex", "all of these", "sharp root", "sharp crest"],
        answer: 2
    },
    {
        question: "220. In designing the spoke or wheel arm of a flywheel it is ideal to consider that the cross-sectional area of the spoke at rim side should not be less than ________of the cross area at the hub side",
        options: ["80%", "2/3", "90%", "3/8"],
        answer: 1
    },
    {
        question: "221. Find the number of active coils of a No. 8 wire Helical Spring with index of 6, steady load with spring rate of 42.5 lb/in . Maximum allowable stress is 60 ksi",
        options: ["25", "28", "29", "22"],
        answer: 0
    },
    {
        question: "222. The cutting up to 70% is best for drilling extremely hard metals and for soft materials ______degrees may be applied",
        options: ["60", "45", "40", "48"],
        answer: 2
    },
    {
        question: "223. _________is the process necessary to reduce the brittleness in alloy steel",
        options: ["martempering", "carburizing", "normalizing", "tempering"],
        answer: 3
    },
    {
        question: "224. The total machinery weight plus the foundation weight should be well distributed in the corresponding soil area which is enough to cause a bearing stress within the safe bearing capacity of the soil with a factor of safety of_________",
        options: ["4.5", "3", "4.2", "5.0"],
        answer: 3
    },
    {
        question: "225. The total weight of 2 steel plates size ¾” x 3’ x 20 ft is",
        options: ["1838 lbs", "1698 lbs.", "3676 lbs.", "1848 lbs."],
        answer: 0
    },
    {
        question: "226. Steel springs are made of high carbon steel heat treated and/or cold worked to a high elastic limit to get good elastic deflection. In general the carbon content is at _________.",
        options: ["0.40% or more", "0.65% or more", "0.5% or more", "0.66% or more"],
        answer: 2
    },
    {
        question: "227. In a chain drive design for large speed reduction it is preferable to use a double reduction or compound type of transmission instead of single two sprockets transmission. Drives should type be so designed that the angle between two tight chain strand does not exceed_____degrees.",
        options: ["45", "60", "55", "90"],
        answer: 0
    },
    {
        question: "228. Method of finishing/shaping a machine part of exceptionally high carbon or high chromium steel parts (orveryhard material)",
        options: ["using oxygen lanching", "using abrasive grinding", "machining using carbine insert", "machining using high speed tool steel"],
        answer: 1
    },
    {
        question: "229. Alloy steel used in manufacturing bolts studs tubings subjected to torsional stresses",
        options: ["AISI 3141", "AISI 2330", "AISI4830", "AISI 4310"],
        answer: 1
    },
    {
        question: "230. Which of the following is not a viscoelastic material?",
        options: ["Teflon", "plastic", "all of these", "metal"],
        answer: 3
    },
    {
        question: "231. A resulting force that replace two or more forces acting together",
        options: ["vector", "couple", "resultant", "equilibrant"],
        answer: 2
    },
    {
        question: "232. Stress relieving is also_________for the purpose of reducing the internal stresses of steel material/metal",
        options: ["tempering", "normalizing", "all of these", "annealing"],
        answer: 0
    },
    {
        question: "233. Matensite (stainless steel) contains 4 to 26% Cr. And a maximum of ______% nickel",
        options: ["2.5", "3.25", "3.5", "2.0"],
        answer: 0
    },
    {
        question: "234. Compute the deflection of a 18 coils helical soring having a load of 100 kgs. The modulus of elasticity in shear of spring is 96.62 GPa, OD of 9 256 cm and with diameter of 9 525 mm. The spring is square and ground ends.",
        options: ["9 mm", "101 mm", "112 mm", "14 mm"],
        answer: 1
    },
    {
        question: "235. A flanged bolt coupling has ten (10) steel 25.4 mm diameter bolts evenly tighten around a 415 mm bolt circle. Determine the torque capacity of the connection if the allowable shearing stress in the bolt is 50 MN/m2",
        options: ["59.95 KN-m", "52.6 KN-m", "46.15 KN-m", "43.8 KN-m"],
        answer: 1
    },
    {
        question: "236. The material that can cut/wear hardest substance subjected to:",
        options: ["carbide", "abrasive", "tungsten", "vanadium"],
        answer: 1
    },
    {
        question: "237. A ridge of uniform section in the form of a helix cut around the circumference of a cylinder and advancing along the axis",
        options: ["thread roots", "helix thread", "screw threads", "chamfers"],
        answer: 2
    },
    {
        question: "238. Cast iron flywheels are commonly designed with factor of safety of",
        options: ["10 to 13", "10 to 12", "10 to 14", "8 to 13"],
        answer: 0
    },
    {
        question: "239. Class of material exhibiting decreased electrical conductivity with increasing temperature",
        options: ["aluminum", "p-type semiconductors", "metals", "n-type semiconductors"],
        answer: 2
    },
    {
        question: "240. The welding made along the edges of two parallel plates is called ______",
        options: ["groove joint", "fillet joint", "edge joint", "corner joint"],
        answer: 2
    },
    {
        question: "241. Not part and in fact should not be used in the steel melting process",
        options: ["coke", "silicon", "zinc", "aluminum"],
        answer: 0
    },
    {
        question: "242. Rule of thumb in calculating the Equipment foundation mass should be____times the weight of the machinery it is supposed to support",
        options: ["3-5", "3-6", "3-9", "2-4"],
        answer: 0
    },
    {
        question: "243. The strength of non-ferrous alloys is at maximum at room temperature while that of ferrous metal has a maximum strength at_______°F",
        options: ["400", "1200", "450", "350"],
        answer: 0
    },
    {
        question: "244. A 76.2 mm diameter shafting of SAE 1040 grade cold rolled, having a yield point of 50 ksi and with a ¾ x ¾ x 5 inches key. Compute the minimum yield point in the key in order to transmit the torque of the shaft. The factor of safety to used is 2 and Sys=0.5Sy.",
        options: ["39.120 Ksi", "42.130 Ksi", "279.20 Ksi", "47.120 Ksi"],
        answer: 3
    },
    {
        question: "245. The ratio of stress acting on an elastic substance to the decrease in volume per unit volume",
        options: ["bulk modulus", "modules of resilience", "elastic limit", "modules of elasticity"],
        answer: 0
    },
    {
        question: "246. The normal helix angles in helical gear is recommended in the range of ______degrees.",
        options: ["less than 18", "20 to 35", "15 to 25", "20 to 30"],
        answer: 2
    },
    {
        question: "247. Type of bolt commonly used in the construction that is threaded in both ends",
        options: ["stud bolt", "acne threaded bolts", "hex bolt", "square threaded bolts"],
        answer: 0
    },
    {
        question: "248. It is rigid piece which serves to transmit force from a piece another piece or to cause/ control motion",
        options: ["follower", "crank", "cam motion", "link"],
        answer: 3
    },
    {
        question: "249. A 20 kgs. cast iron piece rest on a plain horizontal aluminum surface. To move the object it needs a force of 7 lbs. The density of AI is 0.098 lb/in3 and iron is 0.260 lb/in3",
        options: ["0.172", "0.186", "1.601", "0.160"],
        answer: 3
    },
    {
        question: "250. Iron based alloy containing 9-16% chromium",
        options: ["Mn Hadfield steel", "chrome-moly steel", "stainless steel", "high chrome steel"],
        answer: 2
    },
    {
        question: "251. Shafting up to 3 inches in diameter is usually made from cold rolled steel and the common biggest diameter of cold rolled steel is____",
        options: ["4 ¼ inches", "6 7/8 inches", "6 ¾ inches", "5 inches"],
        answer: 3
    },
    {
        question: "252. It is ideal for maximum quietness in sprockets drive operation to choose _____ or more teeth",
        options: ["24", "18", "27", "21"],
        answer: 2
    },
    {
        question: "253. All associated with standard material specification except",
        options: ["American Iron and Steel Institute", "Society of Automotive Engineers", "Southeast Asia Iron and Steel Institute", "American Society for Testing Materials"],
        answer: 2
    },
    {
        question: "254. For stable equipment foundation the total combined engine driven equipment and foundation center of gravity must be kept below the foundation’s too that usually about______ times the usual total combined weight of the machinery it is supposed to support.",
        options: ["3 to 4", "3 to 7", "2 to 4", "3 to 5"],
        answer: 3
    },
    {
        question: "255. A triple thread worm has a pitch diameter of 3 inches. The wheel has 25 teeth and a pitch diameter of 5 inches. Material for both the worm and the wheel is of phosphor bronze. Compute the helix angle (Tanα)",
        options: ["0.20", "0.30", "0.40", "14"],
        answer: 0
    },
    {
        question: "256. A cylinder tank with 10” inside diameter contains oxygen gas at 2500 psi. Calculate the required wall thickness in (mm) under stress of 28 000 psi",
        options: ["11.34 mm", "10.24 mm", "12.44 mm", "10.54 mm"],
        answer: 0
    },
    {
        question: "257. The process of peening the joint portion immediately after the welding greatly improves the fusion structures avoids possible cracking, avoids possible distortion etc. Peening can also _______process at the same time",
        options: ["tempering", "martampering", "normalizing", "annealing"],
        answer: 0
    },
    {
        question: "258. The distance between rivet center nearest each other in adjacent rows is called ______",
        options: ["pitch", "back pitch", "margin", "diagonal pitch"],
        answer: 3
    },
    {
        question: "259. A major alloy in tool steel",
        options: ["Cr", "Fen", "Cobalt", "Mn"],
        answer: 0
    },
    {
        question: "260. A rule of thumb the speed limit of flywheel rim speed should be 6000 fpm for cast iron material and for cast steel flywheel rim at _______ meters/min",
        options: ["3050", "4500", "7000", "10000"],
        answer: 3
    },
    {
        question: "261. Should two equal and opposite collinear forces is added to the forces already in equilibrium, which of the following statement is true?",
        options: ["Unbalanced moment is maintained", "Equilibrium is maintained", "Equilibrium is disturbed", "it creates an unbalanced situation"],
        answer: 1
    },
    {
        question: "262. A pair of gear with gear ratio of 3 and 60 gear teeth of 14 ½ degree full depth tooth. The diametral pitch is 10. Compute the tooth thickness on the pitch circle",
        options: ["0.570 inch", "0.352 inch", "0.157 inch", "0.142 inch"],
        answer: 2
    },
    {
        question: "263. __________ addition imparts resistance to atmospheric corrosion in steel etc.",
        options: ["aluminum bronze", "manganese", "copper", "bronze"],
        answer: 2
    },
    {
        question: "264. The width of a tooth space exceeds the thickness of each of the engaging tooth on the pitch circle________",
        options: ["allowance", "bottom land", "top land", "backlash"],
        answer: 3
    },
    {
        question: "265. Distance measured perpendicular to the axis between the crest of the thread and the root of its mating thread in a thread assembly of screws",
        options: ["tolerance class", "crest truncation", "crest clearance", "tolerance limit"],
        answer: 2
    },
    {
        question: "266. Percentage of cut on the return stroke of hacksaw blade is________",
        options: ["21", "3 %", "1 %", "0 %"],
        answer: 3
    },
    {
        question: "267. Compute the angle required in degrees, for the road to be slanted to prevent an automobile travelling at 25 m/s from tending to slip. The radius of curvature is 200 m.",
        options: ["21", "14", "18", "16"],
        answer: 2
    },
    {
        question: "268. __________is also called strain hardening",
        options: ["work hardening", "quenching", "annealing", "normalizing"],
        answer: 0
    },
    {
        question: "269. Imaginary formed by the intersection of the flanks of a thread when extended is called_______",
        options: ["Sharp Crest", "Sharp root", "Root apex", "All of these"],
        answer: 3
    },
    {
        question: "270. Compute the maximum deflection of a 20 coils helical spring having a load of 75 kgs. The spring is a square/ground ends with modulus of elasticity in shear of 79.84 GPa outside diameter of 101.6 mm wire diameter of a 9 525 mm",
        options: ["140.7 mm", "112.7 mm", "15.17 mm", "126.7 mm"],
        answer: 3
    },
    {
        question: "271. _______forces means when their lines of action can be extended to meet to one point",
        options: ["concurrent", "centroids", "collinear", "resultants"],
        answer: 0
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
