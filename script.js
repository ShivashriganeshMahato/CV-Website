var infoShowingOnScreen = document.getElementById("infoShowing");
var titleParagraphTag = document.getElementById("titleForSection");
var sectionArrays = {
    academicQualification: [
        "Doctor of Philosophy (<strong>Ph.D.</strong>), Applied Physics, University at Albany, State University of New York, USA, 2009.<br /><strong><em>&nbsp&nbsp Dissertations:</em></strong> X-Ray Diffraction-Based Electronic Structure Calculations and Experimental X-Ray Analysis for Medical and Materials Applications.",
        "Master of Science (<strong>M.S.</strong>), Physics (General), University at Albany, State University of New York, USA, 2006.",
        "Master of Philosophy (<strong>M. Phil.</strong>), Applied Physics (Alloy Thin Films), Kathmandu University, Nepal, 2000.<br /><strong><em>&nbsp&nbsp Dissertations:</em></strong> Preparation of Thin Films by Physical Evaporation of the Alloys, Constantan and Nichrome, and study of Their Resistive Properties.",
        "Master's Degree in Science, (<strong>M.Sc.</strong>), Physics (specialization in Plasma Physics), Tribhuvan University, Nepal, 1993.<br /><strong><em>&nbsp&nbsp Dissertations:</em></strong> Study of Large Amplitude Plasma Waves and Maximum Energy of Electrons in Plasma Beat-Wave Accelerator.",
        "Bachelor's Degree in Science (<strong>B.Sc.</strong>), Physics-Chemistry-Mathematics, Tribhuvan University, Nepal, 1991."
    ],
    employmentHistory: [
        "Process Technology Development Engineer, Intel Corporation, RA3 Campus, Hillsboro, Oregon, since April 6, 2009.",
        "Adjunct Teacher, Department of Physics, SUNY at Albany, Spring 2008, Summer 2008 and Fall 2008.",
        "Lecturer, Department of Physics, SUNY at Albany, Fall 2007.",
        "Teaching Assistant, Department of Physics, SUNY at Albany, Spring 2005 – Spring 2008.",
        "Study Group Facilitator, Office of Academic Supports, Educational Opportunity Program, SUNY at Albany, Spring 2006 – Fall 2008.",
        "Research Assistant, Center for X-ray Optics, Department of Physics, SUNY at Albany, Summer 2007.",
        "Research Assistant, College of Nanoscale Science and Engineering, SUNY at Albany, in Collaboration with GE Global Research, Summer 2007.",
        "Research Assistant, College of Nanoscale Science and Engineering, SUNY at Albany, Summer 2005 and 2006.",
        "Assistant Professor, Department of Physics, Kathmandu University, Nepal, 12/26/2000 – 08/17/2004.",
        "Lecturer, Department of Physics, Kathmandu University, Nepal, 12/22/1995 – 12/25/2000.",
        "Instructor, Department of Physics, Kathmandu University, Nepal, 02/20/1995 – 12/21/1995."
    ],
    engineeringSkills: [
        "Defining roadmaps to meet requirements, goals and milestones for a new technology process.",
        "Establishing flow, procedures, and equipment configuration for the module.",
        "Selecting and developing material and equipment for the process to meet quality, reliability, cost, yield, productivity and manufacturability requirements.",
        "Planning and conducting experiments to fully characterize the process throughout the development cycle.",
        "Driving improvements on quality, reliability, cost, yield, process stability/capability, productivity and safety/ergonomic over variables such as material, method, equipment, environment and operating personnel.",
        "Developing solutions to problems utilizing statistical knowledge, and problem-solving tools.",
        "Establishing process control systems for the process module and sustaining the module through volume ramp.",
        "Developing strategy to resolve difficult problems and establishing systems to deal with these problems in the future.",
        "Training production/receiving process engineers for transfer to other factories.",
        "Transferring process to high volume manufacturing and providing support in new factory start-up as well as installing and qualifying the new production lines."
    ],
    devResInt: [
        "Semiconductor Process Technology.",
        "LED chips and materials.",
        "Solid Thin Films Deposition and Characterization.",
        "Crystal growth and characterization.",
        "X-ray analysis for materials characterization.",
        "Coherent Scatter Imaging for Mammography.",
        "Nano-Biophysics (Raman Characterization of DNA-CNT Hybrid).",
        "Thin Film Optical Fiber Sensors for Gas Detection.",
        "Computational Physics (Biological and Chemical Compounds using Gaussian Computing Systems).",
        "Plasma Physics Applications."
    ],
    equipmentUsed: [
        "Semiconductor process equipment, Scanning Electron Microscopy and associated tools.",
        "Nikon and ASML Scanning Optical Systems plus associated 193-nm Immersion and 193/248-nm Dry tracks including TEL and ACT tools.",
        "High Vacuum Thin Film Coating System: PVD nanotechnology based equipment.",
        "X-ray machines (Copper-, Molybdenum-, Tungsten- Anode tubes) and associated components.",
        "Rotating Anode X-ray Source and associated components.",
        "Fuji Imaging System for powder diffraction and coherent scatter mammography measurements.",
        "Ion Beam Dynamitron and associated components. ",
        "Raman Spectrometer and UV.",
        "Optical Fiber Gas Detecting Systems."
    ],
    compSoftwareSkills: [
        "JMP, GAJT, SPC, PCSA, MGPC3, SQL PathFinder, CrystalBall, Discovery, Klarity.",
        "Windows, PowerPoint, Word, Excel, Origin, MAPLE, MATLAB, Fit-2D, ACP.",
        "Gaussian Computing Systems, RIKEN Super-computers."
    ],
    publications: [
        [
            "Hassan Abbas, Dip N. Mahato, C. A MacDonald, \"Measurements and Simulations of Focused Beam for Orthovoltage Therapy\", Medical Physics, 41, 041702 (2014).",
            "Dip N. Mahato, C.A. MacDonald, “Potential for Focused Beam Orthovoltage Therapy”, Proc. SPIE, 7806, 78060F1-78060F7, 2010.",
            "Wei Zhou, Dip N. Mahato and C.A. MacDonald, “Analysis of Powder X-Ray Diffraction Resolution Using Collimating and Focusing Polycapillary Optics”, Thin Solid Films, 518, 5047-5056, 2010.",
            "Dip N. Mahato, Archana Dubey, R.H. Pink, R.H. Scheicher, S.R. Badu, K. Nagamin, E.Torikai, H.P.Saha, Lee Chow, M.B. Huang, T.P. Das, “Theoretical Investigation of Nuclear Quadrupole interactions in DNA at First–Principles Level”, Hyperfine Interact, 181, 601-606, 2008.",
            "K. Ramani Lata, N. Sahoo, Archana Dubey, R.H. Scheicher, S.R. Badu, R.H. Pink, Dip N. Mahato, A.F. Schulte, H.P. Saha, N.B. Maharjan, L. Chow, T.P. Das, “Investigation of the hyperfine properties of deoxy hemoglobin based on its electronic structure obtained by Hartree-Fock-Roothan procedure”, Hyperfine Interact, 181, 75-80, 2008.",
            "Ayhan Bingölbali, Wei Zhou, Dip N. Mahato and C.A. MacDonald, “Focused beam powder diffraction with polycapillary and curved crystal optics”, Advances in X-ray/EUV Optics and Components III, SPIE, 7077, 70770M.1 – 70770M.8, 2008.",
            "Dip N. Mahato, R.H. Pink, S.R. Badu, R.H. Scheicher, Archana Dubey, H.P. Saha, Lee Chow, Mahendra K.  Mahanti, M.B. Huang, T.P. Das, “First Principles Study of Nuclear Quadrupole Interactions in the Molecular Solid BF3 and the Nature of Binding between the Molecules”, Hyperfine Interact, 176, 15-20, 2007. ",
            "R. H. Pink, Archana Dubey, Dip N. Mahato, R. H. Scheicher, Mahendra K. Mahanti, M. B. Huang, H. P. Saha, Lee Chow, T. P. Das, “Theory of Electronic Structure and Nuclear Quadrupole Interactions in the BF3-NH3 Complex and Methyl Derivatives”, Hyperfine Interact, 176, 39-44, 2007. ",
            "Archana Dubey, H.P.Saha, R.H. Pink, S.R. Badu, Dip N. Mahato, R. H. Scheicher, Mahendra K. Mahanti, Lee Chow, T.P. Das, “Nuclear Quadrupole Interactions and Electronic Structure of BF3H2O Complex”, Hyperfine Interactions, 176, 45-50, 2007.",
            "R. H. Pink, Archana Dubey, Dip N. Mahato, R. H. Scheicher, Mahendra K. Mahanti, M. B. Huang, H. P. Saha, Lee Chow, T. P. Das, “First Principles Study of Quantitative Strengths of Covalent Bonding and Van der Waals Interaction in BF3∙NH3 Complex and Associated Nuclear Quadrupole Interaction” (<em>Ready to be submitted</em>).",
            "Dip N. Mahato, L. N. Jha, \"Maximum Energy of Electrons in Beat-Wave Accelerator\", Proc. Nepal Physical Society, vol.15 (1), 36-39, 1998."
        ],
        [
            "H. Abbas, Dip N. Mahato, J. Satti, C. A. MacDonald, \"Potential for Focused Low Energy X-ray Beam for Therapy\", AAPM 54th Annual Meeting, Charlotte, North Carolina, Jul 29 - Aug 2, 2012.",
            "Dip. N. Mahato, A. Dubey, R.H. Scheicher, R.H. Pink, K. Nagamine, E. Torikai, H.P. Saha, L. Chow, M.B. Huang, T.P. Das, “First Principles Investigation of Nuclear Quadrupole Interactions in DNA”, <strong>XIV International Conference on Hyperfine Interactions & XVIII International Symposium on Nuclear Quadrupole Interactions, Iguazu Falls, Brazil, August 5-10, 2007.</strong>",
            "Dip. N. Mahato, R.H. Pink, R.H. Scheicher, A. Dubey, H.P. Saha, L. Chow, M.K. Mahanti, T.P. Das, “First Principle Study of Nuclear Quadrupole Interactions in the Molecular Solid BF$_3$ and the nature of binding between the Molecules”, <strong>XIV International Conference on Hyperfine Interactions & XVIII International Symposium on Nuclear Quadrupole Interactions, Iguazu Falls, Brazil, August 5-10, 2007.</strong>",
            "T.P. Das, K. Ramani Lata, R.H. Pink, Dip N. Mahato, Archana Debey, H.P.  Saha, A.F. Schulte, Lee Chow, R.H. Scheicher, N.B. Maharjan, N. Sahu, “Hartree – Fock study of the Heme Unit of deoxy-hemoglobin for Hyperfine Interactions and Vibrational Properties”, L35.00001, APS March 2007 Meeting, Denver, Colorado, March 5-9, 2007.",
            "Dip N. Mahato, R.H. Pink, M.B. Huang, T.P. Das, Archana Dubey, Lee Chow, Mahendra K. Mahanti, R. H. Scheicher, “First-Principles Study of the Nature of  Binding in BF$_{3}$ Molecular Solids”, L19.00008, APS March 2007 Meeting, Denver, Colorado, March 5-9, 2007.",
            "Archana Dubey, H.P. Saha, Lee Chow, R.H. Pink, Dip N. Mahato, M.B. Huang, T.P. Das, R.H. Scheicher, Mahendra K. Mahanti, “Investigation of Bonding in the BF$_{3}$-H$_{2}$O Complex”, L19.00006, APS March 2007 Meeting, Denver, Colorado, March 5-9, 2007.",
            "R.H. Pink, Junho Jeong, Dip N. Mahato, M.B. Huang, T.P. Das, R.H. Scheicher, Sitaram Byahut, “First- Principles Study of Er Location in Er-Si Systems with Oxygen Co-Dopants”, U40.00005, APS March 2007 Meeting, Denver, Colorado, March 5-9, 2007.",
            "R.H. Scheicher, Dip N. Mahato, R.H. Pink, M.B. Huang, T.P. Das, Archana Dubey, H.P. Saha, Lee Chow, “Study of Electronic Structures of Nucleobases and Associated Nuclear Quandrupole Interactions for $^{14}$N, $^{17}$O and  $^{2}$H in A-DNA and B-DNA”, V35.00009, APS March 2007 Meeting, Denver, Colorado, March 5-9, 2007.",
            "Dip N. Mahato, R.H. Pink, M.B. Huang, T.P. Das, Archana Dubey, Lee Chow, Mahendra K. Mahanti, R.H. Scheicher,  “Electron Distribution in  Solid BF3 and BF3 - NH3 - Associated Nuclear Quadrupole Interactions”, Bulletin of the American Physical Society March Meeting , Baltimore, MD, USA, 2006.",
            "Archana  Dubey, H.P. Saha, Lee Chow, R.H.  Scheicher, N. Sahoo, R.H. Pink, Dip N. Mahato, M.B. Huang, T.P. Das, “Unrestricted Hartree-Fock Investigation of the Electron Distribution on the Heme System in  Azidohemoglobin- 57mFe and 14N Hyperfine Interactions”, Bulletin of the  American Physical Society March Meeting, Baltimore, MD, USA, 2006.",
            "Chow, Lee; Dubey, Archana; Collins, Gary S.; Scheicher, R. H.; Pink, R. H.; Mahato, Dip N.; Das, T. P. , “Study of Trapping Sites for Beryllium Atom in  C60-Fullerene and Electron Capture for 7Be Nucleus”, Bulletin of the American Physical Society March Meeting , Baltimore, MD, USA, 2006.",
            "R.H. Pink , Dip N. Mahato , M.B. Huang , T.P. Das , Archana Dubey , Lee Chow, Mahendra K. Mahanti, R.H. Scheicher, “Theory of Electronic Structure and Nuclear Quadrupole Interactions in the BF3-NH3 Complex”, Bulletin of the American Physical Society March Meeting , Baltimore, MD, USA, 2006.",
            "Mahendra K. Mahanti , Archana Dubey , H.P. Saha , Lee Chow , R. H. Scheicher, R.H. Pink , Dip N. Mahato , M.B. Huang , T.P. Das, “Theory of Nuclear Quadrupole Interaction in Trifluoro-Aminoboranes [BF$_{3}$-NH$_{3-X}$(CH$_{3})_{X}$]”,  Bulletin of the American Physical Society March Meeting, Baltimore, MD, USA, 2006.",
            "Dip N. Mahato, S. R. Kafle, “Experimental Analysis of Resistive Properties of Thin Films Prepared by Physical Evaporation of Constantan and Nichrome”, Bulletin of the Fourth National Conference of RONAST, 2004."
        ]
    ],
    conference: [
        "SPIE Advanced Lithography Conference, San Jose, California, USA, 2013.",
        "SPIE Optics + Photonics Conference, San Diego, California, USA, 2010.",
        "Physics All Student Conference at Albany (PASCAL), Albany, New York, USA, 2008.",
        "American Physical Society March 2007 Meeting in Denver, Colorado, USA, 2007.",
        "Physics All Student Conference at Albany (PASCAL), Albany, New York, USA, 2007.",
        "Physics All Student Conference at Albany (PASCAL), Albany, New York, USA, 2006.",
        "American Physical Society March 2006 Meeting in Baltimore, Maryland, USA, 2006.",
        "Fourth National Conference of RONAST, Kathmandu, Nepal, 2004.",
        "Fifteenth Annual Convention of NPS, Kathmandu, Nepal, 1998."
    ],
    majorWorkParts: [
        "TEL 300MM LITHIUS Pro-V Maintenance & Basic Troubleshooting session in Austin, Texas, 04/07 - 04/15, 2014.",
        "TEL 300MM LITHIUS Maintenance & Basic Troubleshooting session in Austin, Texas, 09/28 - 12/09, /2011.",
        "InterCAT Technical Workgroup Meeting at Argonne National Laboratory, Chicago, Illinois, 02/17/2011.",
        "UNESCO Regional Workshop on Lightning Physics held at University of Colombo, Sri Lanka, 4/29 -5/7, 2003.",
        "1997 ICTP-BCSPIN Kathmandu Summer School in Physics on “Current Trends in High Energy Physics and Cosmology\", Pulchowk, Kathmandu, Nepal, 5/19 – 6/3, 1997.",
        "BCSPIN Kathmandu Preparatory School, organized by ICTP (International Center for Theoretical Physics), ASCOL, Lainchour, Kathmandu Nepal, 1/7 – 1/21, 1997.",
        "BCSPIN Kathmandu Preparatory School, organized by ICTP (International Center for Theoretical Physics), ASCOL, Lainchour, Kathmandu Nepal, 1994."
    ],
    AwHoFuGr: [
        "Logic Technology Development Systems Divisional Award, 2014, Intel, USA.",
        "Logic Technology Development Systems Divisional Award, 2013, Intel, USA.",
        "Logic Technology Development Systems Divisional Award, 2012, Intel, USA.",
        "Dry193/248 Track/Layer Goodie Drawer Level I Award, 2011, Intel, USA.",
        "Immersion lithography Rock Star (Goodie Drawer Level II) Award, 2010, Intel, USA.",
        "Immersion lithography Outstanding (Goodie Drawer Level I) Award, 2010, Intel, USA.",
        "Teaching Assistant of the Year 2007 Award, Physics, SUNY at Albany, USA, 2007.",
        "GSEU Award, SUNY at Albany, USA.",
        "UGC Fellowship for Physics (M. Phil.) at KU, Nepal.",
        "M.Sc. Dissertation Fellowship from the Nepal Academy of Science and Technology (NAST), Nepal.",
        "Recognition from State University of New York, University at Albany for my work performed teaching.",
        "Appreciation from Educational Opportunity Program (EOP), State University of New York, University at Albany, USA.",
        "Scientific contribution recognition by the State University of New York, University at Albany for my contributions to the 5th Physics All Student Conference at Albany.",
        "Participation recognition for my scientific contribution to the Physics All Student Conference at Albany, 2007.",
        "Participation recognition for my role at the Fourth National Conference on Science and Technology organized by the Royal Nepal Academy of Science and Technology, 2004.",
        "Participation funding at the UNESCO Regional Workshop on Lightning Physics at University of Colombo, Sri Lanka, 2003.",
        "Participation certificate for my attendance at the 1997 ICTP-BCSPIN conference, “Current Trends in High Energy Physics and Cosmology”."
    ],
    proffesionalAfflic: [
        "Regular Member of SPIE since 2013.",
        "Full Member of Sigma Xi (The Scientific Research Society) since 2011.",
        "Full Member of American Association of Physics in Medicine (“AAPM”) since 2011.",
        "Journal Referee of American Physical Society (“APS”) since 2011.",
        "Member of Intel Plane-Blue since 2009.",
        "Member of American Physical Society since 2006.",
        "Member of NYSUT (UUP) since 2006.",
        "Member of Graduate Student Employees Union (GSEU) at State University of New York (SUNY), Jan 2005 – Jan 2009.",
        "Member of SUNY Physics Graduate Studies Committee since 2006.",
        "Life Member of Nepal Physical Society since 1998."
    ],
};

function changeInfoShowingOnScreen(innerHTMLCode) {
    infoShowingOnScreen.innerHTML = innerHTMLCode;
}
function changeTitle(innderHTMLCode) {
    titleParagraphTag.innerHTML = "<h3 class='centerText'>" + innderHTMLCode + "</h3>";
}
function AboutHandle() {
    changeInfoShowingOnScreen(
        "<p class='centerText'>An applied physicist with enormous experience in areas of LTD systems,<br />semiconductor process engineering, x-ray analysis for medical & materials applications,<br />thin solid films, Raman characterization of DNA-CNT Hybrid, plasma physics,<br />and biological/chemical systems modeling</p>"
    );
    changeTitle("About");
}
function QualifsHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.academicQualification.length; i ++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.academicQualification[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Academic Qualifications");
}
function EmHistoryHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.employmentHistory.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.employmentHistory[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Employment History");
}
function EnginSkillsHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.engineeringSkills.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.engineeringSkills[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Engineering Skills/Expertise");
}
function DevResIntsHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.devResInt.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.devResInt[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Areas of Interest in Research and Development");
}
function EquipUsedHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.equipmentUsed.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.equipmentUsed[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Equipment Used");
}
function CompSoftSkillsHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.compSoftwareSkills.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.compSoftwareSkills[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Computer/Software Skills");
}
function PublicsHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<h4><strong>Refereed Articles</strong></h4><ul>";
    for (var i = 0; i < sectionArrays.publications[0].length; i++) {
        sectionArrays.publications[0][i] = sectionArrays.publications[0][i].replace(new RegExp("Dip N. Mahato", "g"), "<strong>Dip N. Mahato</strong>");
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.publications[0][i] + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul><h4><strong>Conference Abstracts</strong></h4><ul>";
    for (var i = 0; i < sectionArrays.publications[1].length; i++) {
        sectionArrays.publications[1][i] = sectionArrays.publications[1][i].replace(new RegExp("Dip N. Mahato", "g"), "<strong>Dip N. Mahato</strong>");
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.publications[1][i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Publications");
}
function ConfPresPartHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.conference.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.conference[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Conference Presentations/participations");
}
function MajorWorkPartsHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.majorWorkParts.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.majorWorkParts[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Major Workshop/Participation");
}
function AHFGrantsHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.AwHoFuGr.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.AwHoFuGr[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Awards, Honors, Fundings and Grants");
}
function ProffAffilHandle() {
    changeInfoShowingOnScreen("");
    infoShowingOnScreen.innerHTML += "<ul>";
    for (var i = 0; i < sectionArrays.proffesionalAfflic.length; i++) {
        infoShowingOnScreen.innerHTML += "<li>" + sectionArrays.proffesionalAfflic[i].toString() + "</li>";
    }
    infoShowingOnScreen.innerHTML += "</ul>";
    changeTitle("Professional Affiliations");
}