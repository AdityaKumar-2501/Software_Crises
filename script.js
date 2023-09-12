// Data for famous software crises with detailed descriptions and Wikipedia links
const crisesData = [
  {
      name: "Y2K Bug (Year 2000 Problem)",
      problem: "The Y2K bug, also known as the Year 2000 problem, was a global software issue where many computer systems and software applications represented years using only the last two digits. This caused concerns that when the year rolled over from 1999 to 2000, these systems would interpret '00' as 1900 instead of 2000, potentially leading to date-related malfunctions and data errors.",
      cause: "The cause of the Y2K bug was the prevalent practice of saving memory and storage space by using two-digit year representations. When these systems were originally designed, the year 2000 was far in the future, and the issue was not adequately considered during development.",
      cost: "$100 billion+",
      wikipediaLink: "https://en.wikipedia.org/wiki/Year_2000_problem",
      year: 2000
  },
  {
      name: "Ariane 5 Flight 501",
      problem: "The Ariane 5 Flight 501 disaster occurred when the maiden flight of the Ariane 5 rocket, carrying a payload of four scientific satellites, ended in failure within 40 seconds after liftoff. The rocket's software experienced an overflow error in the inertial reference system, leading to a loss of control.",
      cause: "The cause of the failure was a software exception due to data conversion error. The software that controlled the inertial reference system attempted to convert a 64-bit floating-point number to a 16-bit signed integer. This caused an overflow error, resulting in the rocket's guidance system shutting down.",
      cost: "Over $370 million",
      wikipediaLink: "https://en.wikipedia.org/wiki/Ariane_5_Flight_501",
      year: 1996
  },
  {
      name: "Therac-25 Radiation Therapy Machine",
      problem: "The Therac-25 radiation therapy machine was designed to deliver therapeutic radiation doses to cancer patients. However, it caused several patients to receive lethal radiation overdoses, leading to injuries and deaths.",
      cause: "The problem was attributed to software and hardware faults in the Therac-25's computerized control system. The software lacked adequate error-checking mechanisms and failed to prevent dangerous doses of radiation from being administered.",
      cost: "Several lives and lawsuits",
      wikipediaLink: "https://en.wikipedia.org/wiki/Therac-25",
      year: 1985
  },
  {
      name: "Knight Capital Group Trading Loss",
      problem: "Knight Capital Group, a financial services firm, suffered a catastrophic trading loss of over $460 million in just 45 minutes due to a software glitch. The malfunction caused the firm's trading software to repeatedly buy and sell stocks at incorrect prices.",
      cause: "The cause of the incident was a software deployment issue. Knight Capital had recently deployed new trading software, which included an old, unused function. This function began sending erroneous orders to the market, resulting in massive financial losses.",
      cost: "$460 million loss in 45 minutes",
      wikipediaLink: "https://en.wikipedia.org/wiki/Knight_Capital_Group",
      year: 2012
  },
  {
      name: "Heartbleed Bug",
      problem: "The Heartbleed bug was a critical security vulnerability in the OpenSSL cryptography library, a widely used software component for securing internet communications. It allowed attackers to steal sensitive data, including passwords and encryption keys, from affected servers without leaving a trace.",
      cause: "The cause of the Heartbleed bug was a coding error in the OpenSSL software. Specifically, it resulted from a missing bounds check in the software's implementation of the Transport Layer Security (TLS) heartbeat extension.",
      cost: "Billions in damages",
      wikipediaLink: "https://en.wikipedia.org/wiki/Heartbleed",
      year: 2014
  },
  {
      name: "NASA Mars Climate Orbiter",
      problem: "The Mars Climate Orbiter was a NASA spacecraft designed to study the climate and atmosphere of Mars. However, the mission ended in failure due to a software-related issue. The spacecraft entered the Martian atmosphere too low and was lost.",
      cause: "The cause of the mission failure was a unit conversion error in the software. One piece of software used imperial units (pound-seconds) while another used metric units (newton-seconds) to calculate thruster forces. This discrepancy in units resulted in the spacecraft's incorrect trajectory and ultimate loss.",
      cost: "$327.6 million",
      wikipediaLink: "https://en.wikipedia.org/wiki/Mars_Climate_Orbiter",
      year: 1999
  },
  {
      name: "Windows 95 Launch",
      problem: "The launch of Microsoft Windows 95, a highly anticipated operating system, was marred by software bugs and compatibility issues. Users encountered crashes, system instability, and incompatibility with existing software and hardware.",
      cause: "The cause of the problems was the complexity of Windows 95 and the tight development deadlines. Microsoft faced immense pressure to release the operating system, which led to insufficient testing and the inclusion of known bugs.",
      cost: "Reputation damage",
      wikipediaLink: "https://en.wikipedia.org/wiki/Windows_95",
      year: 1995
  },
  {
      name: "LinkedIn Data Breach",
      problem: "LinkedIn, a professional social networking platform, suffered a major security breach in 2012. Hackers gained unauthorized access to the company's user database and exposed millions of user credentials, including passwords.",
      cause: "The cause of the breach was a weak password hashing algorithm used by LinkedIn to store user passwords. The algorithm, known as SHA-1, was susceptible to brute-force attacks, allowing hackers to crack the hashed passwords.",
      cost: "Millions of user credentials compromised",
      wikipediaLink: "https://en.wikipedia.org/wiki/2012_LinkedIn_hack",
      year: 2012
  },
  {
      name: "Stuxnet Worm",
      problem: "The Stuxnet worm was a highly sophisticated cyberweapon designed to target industrial control systems, particularly those used in Iran's nuclear program. It caused physical damage to centrifuges used in uranium enrichment.",
      cause: "The cause of the Stuxnet worm was its sophisticated design and exploitation of multiple zero-day vulnerabilities in Windows and Siemens industrial control systems. It is believed to be a state-sponsored cyberattack.",
      cost: "Undisclosed",
      wikipediaLink: "https://en.wikipedia.org/wiki/Stuxnet",
      year: 2010
  },
  {
      name: "Sony PlayStation Network Outage",
      problem: "Sony's PlayStation Network (PSN), an online gaming platform, experienced a prolonged outage in 2011 due to a cyberattack. The outage disrupted online gaming and exposed user data to hackers.",
      cause: "The cause of the outage was a cyberattack on Sony's online gaming network. Hackers exploited vulnerabilities in the PSN infrastructure and gained unauthorized access, leading to service disruptions and data breaches.",
      cost: "Over $170 million",
      wikipediaLink: "https://en.wikipedia.org/wiki/2011_PlayStation_Network_outage",
      year: 2011
  },
  {
      name: "SolarWinds Cyberattack",
      problem: "A large-scale cyberattack compromised the SolarWinds Orion platform, allowing hackers to infiltrate government and corporate networks. The attack raised concerns about supply chain security.",
      cause: "The cause of the software problems was the complexity of the aircraft's systems and the challenges of integrating various software components. Issues included software bugs, avionics system malfunctions, and electrical system anomalies.",
      cost: "Extensive damage, cost of remediation and cybersecurity enhancements.",
      wikipediaLink: "https://en.wikipedia.org/wiki/2020_United_States_federal_government_data_breach",
      year: 2020
  },
  {
      name: "Colonial Pipeline Ransomware Attack",
      problem: "A ransomware attack targeted Colonial Pipeline, a major U.S. fuel pipeline operator. The attack disrupted fuel supply along the East Coast, causing fuel shortages and price spikes.",
      cause: "The attack was carried out by the DarkSide ransomware group. It exploited vulnerabilities in Colonial Pipeline's IT systems, gaining control and demanding a ransom payment.",
      cost: "Millions in ransom payment and operational losses.",
      wikipediaLink: "https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack",
      year: 2021
  },
  {
      name: "Facebook Data Leak",
      problem: "A massive data leak exposed personal information of over 533 million Facebook users. The leaked data included phone numbers, email addresses, and other sensitive details.",
      cause: "The data leak was attributed to a vulnerability that allowed malicious actors to scrape user data from Facebook profiles. The data was then made available on a hacking forum.",
      cost: "Reputation damage and concerns about user privacy.",
      wikipediaLink: "https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal",
      year: 2019
  },
  {
      name: "Kaseya VSA Supply Chain Attack",
      problem: "A supply chain attack targeting the Kaseya VSA software impacted numerous managed service providers (MSPs) and their clients. The attackers used ransomware to encrypt data.",
      cause: "The attack exploited vulnerabilities in the Kaseya VSA software. Hackers utilized a zero-day vulnerability to gain access to MSPs' systems and deploy ransomware.",
      cost: "Ransom demands and extensive recovery efforts.",
      wikipediaLink: "https://en.wikipedia.org/wiki/Kaseya#July_2021_ransomware_attack",
      year: 2021
  },
  {
      name: "Microsoft Exchange Server Vulnerabilities",
      problem: "Multiple critical vulnerabilities were discovered in Microsoft Exchange Server, allowing hackers to compromise email servers. This led to widespread exploitation by threat actors.",
      cause: "The vulnerabilities in Microsoft Exchange Server were discovered by security researchers and were actively exploited by nation-state and criminal actors. Microsoft released security patches to address the issues.",
      cost: "Significant remediation and security update costs for affected organizations.",
      wikipediaLink: "https://en.wikipedia.org/wiki/ProxyLogon",
      year: 2021
  }
];

// Function to create crisis list items
function createCrisesList() {
  const crisesList = document.getElementById("crises-list");

  crisesData.forEach(crisis => {
      const crisisItem = document.createElement("div");
      crisisItem.classList.add("crises-item");
      crisisItem.innerHTML = `
          <h2>${crisis.name} (${crisis.year})</h2>
          <p><strong>Problem:</strong> ${crisis.problem}</p>
          <p><strong>Cause:</strong> ${crisis.cause}</p>
          <p><strong>Cost:</strong> ${crisis.cost}</p>
          <p><a href="${crisis.wikipediaLink}" target="_blank">Learn more on Wikipedia</a></p>
      `;
      crisesList.appendChild(crisisItem);
  });
}

// Call the function to create the crises list
createCrisesList();
