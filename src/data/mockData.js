// ==============================================================================
// NIRNAI - LEGAL MOCK DATA
// Complete 11 Official Case Categories, Hierarchical Issues & Verified Advocates
// ==============================================================================

export const CASE_CATEGORIES = [
  {
    id: 'civil',
    name: 'Civil cases',
    shortName: 'Civil',
    covers: 'Private disputes over rights, property, contracts, or money; remedy is usually compensation, declaration, possession, or an injunction',
    examples: 'Money recovery, property/title disputes, breach of contract, damages, eviction, partition, injunction, specific performance',
    icon: 'Scale',
    badge: 'Civil Bar'
  },
  {
    id: 'criminal',
    name: 'Criminal cases',
    shortName: 'Criminal',
    covers: 'Alleged offences against the state or society; the state prosecutes, and possible outcomes include fine, imprisonment, or acquittal',
    examples: 'Theft, assault, cheating, fraud, murder, rape, cybercrime, corruption, cheque bounce, NDPS and POCSO matters',
    icon: 'Gavel',
    badge: 'Criminal Defense'
  },
  {
    id: 'constitutional',
    name: 'Constitutional/writ cases',
    shortName: 'Constitutional',
    covers: 'Enforcement of fundamental rights or challenge to unlawful state action',
    examples: 'Habeas corpus, mandamus, certiorari, prohibition, quo warranto, PILs',
    icon: 'Landmark',
    badge: 'High Court & SC'
  },
  {
    id: 'family',
    name: 'Family cases',
    shortName: 'Family',
    covers: 'Marriage, children, maintenance, inheritance, and guardianship',
    examples: 'Divorce, judicial separation, custody, maintenance/alimony, adoption, guardianship, probate/succession',
    icon: 'Users',
    badge: 'Family & Matrimonial'
  },
  {
    id: 'commercial',
    name: 'Commercial/corporate cases',
    shortName: 'Corporate',
    covers: 'Business, contracts, companies, insolvency, and arbitration',
    examples: 'Commercial suits, shareholder disputes, company petitions, Insolvency proceedings, arbitration enforcement',
    icon: 'Briefcase',
    badge: 'NCLT & Corporate'
  },
  {
    id: 'consumer',
    name: 'Consumer cases',
    shortName: 'Consumer',
    covers: 'Defective goods, deficient services, unfair trade practices, misleading advertisements',
    examples: 'Refund, replacement, compensation, product liability, service deficiency',
    icon: 'ShieldCheck',
    badge: 'Consumer Forums'
  },
  {
    id: 'labour',
    name: 'Labour/employment cases',
    shortName: 'Labour',
    covers: 'Employment, wages, industrial disputes, and social-security matters',
    examples: 'Wrongful termination, unpaid wages, gratuity, provident fund, industrial disputes',
    icon: 'Briefcase',
    badge: 'Labour & Employment'
  },
  {
    id: 'tax',
    name: 'Tax cases',
    shortName: 'Taxation',
    covers: 'Direct and indirect tax disputes',
    examples: 'Income-tax, GST, customs, excise, service-tax appeals and assessments',
    icon: 'FileText',
    badge: 'Tax & Tribunals'
  },
  {
    id: 'environmental',
    name: 'Environmental cases',
    shortName: 'Environmental',
    covers: 'Pollution, forests, wildlife, and environmental clearance disputes',
    examples: 'NGT applications, pollution-control matters, forest and wildlife cases',
    icon: 'Compass',
    badge: 'NGT & Forest'
  },
  {
    id: 'election',
    name: 'Election cases',
    shortName: 'Election',
    covers: 'Challenges to elections or electoral processes',
    examples: 'Election petitions for Parliament, state legislature, and local-body elections',
    icon: 'Layers',
    badge: 'Election Petitions'
  },
  {
    id: 'land-revenue',
    name: 'Land/revenue cases',
    shortName: 'Land & Revenue',
    covers: 'Land records, acquisition, tenancy, revenue, and compensation',
    examples: 'Land acquisition compensation, mutation, tenancy, revenue appeals',
    icon: 'Building2',
    badge: 'Revenue & Land'
  }
];

export const LEGAL_ISSUES = [
  // =========================================================================
  // 1. CIVIL CASES
  // =========================================================================
  {
    id: 'civil-money-recovery',
    category: 'Civil cases',
    name: 'Money Recovery & Summary Suits',
    shortName: 'Money Recovery',
    icon: 'Scale',
    description: 'Order 37 summary suits, loan recovery, debt claims, and civil damages for contract breach.',
    caseTypes: [
      'Order 37 CPC Summary Suit for Debt Recovery',
      'Recovery of Promissory Note & Unpaid Loan Arrears',
      'Damages & Compensation for Breach of Agreement',
      'Commercial Money Suit with Statutory Interest',
      'Execution of Money Decree (Order 21 CPC)'
    ]
  },
  {
    id: 'civil-injunctions',
    category: 'Civil cases',
    name: 'Injunctions & Declaratory Relief',
    shortName: 'Injunctions',
    icon: 'Scale',
    description: 'Permanent, temporary stay orders (Order 39), and declaration of ownership rights.',
    caseTypes: [
      'Permanent Injunction Suit (Specific Relief Act)',
      'Temporary Injunction / Ex-parte Stay Order (Order 39 CPC)',
      'Declaration of Title, Ownership & Possession',
      'Mandatory Injunction for Status Quo Restitution',
      'Interlocutory Application for Police Protection'
    ]
  },
  {
    id: 'civil-specific-performance',
    category: 'Civil cases',
    name: 'Specific Performance of Contracts',
    shortName: 'Specific Performance',
    icon: 'Handshake',
    description: 'Enforcing sales contracts, rescission of agreements, and cancellation of instruments.',
    caseTypes: [
      'Specific Performance of Agreement of Sale',
      'Rescission & Termination of Breach Contract',
      'Cancellation of Fraudulent Sale Deed / Agreement',
      'Rectification of Instruments & Lease Deeds',
      'Alternative Compensation in lieu of Performance'
    ]
  },
  {
    id: 'civil-tort-damages',
    category: 'Civil cases',
    name: 'Tort & Civil Damages',
    shortName: 'Tort Claims',
    icon: 'HeartPulse',
    description: 'Civil defamation compensation, nuisance, property damage, and negligence lawsuits.',
    caseTypes: [
      'Civil Defamation & Reputation Damages Claim',
      'Nuisance & Neighbor Boundary Encroachment Damages',
      'Negligence & Property Damage Compensation Suit',
      'Malicious Prosecution Civil Compensation'
    ]
  },

  // =========================================================================
  // 2. CRIMINAL CASES
  // =========================================================================
  {
    id: 'crim-bail',
    category: 'Criminal cases',
    name: 'Bail & Anticipatory Bail',
    shortName: 'Bail Matters',
    icon: 'Gavel',
    description: 'Regular bail, anticipatory bail (Sec 438 CrPC), interim bail, and transit bail.',
    caseTypes: [
      'Regular Bail Application (Sec 437/439 CrPC / BNSS)',
      'Anticipatory Bail Petition (Sec 438 CrPC / BNSS)',
      'Interim & Medical Emergency Bail Petition',
      'Statutory / Default Bail under Sec 167(2) CrPC',
      'Cancellation of Bail Defense & Surrender Petition'
    ]
  },
  {
    id: 'crim-cheque-bounce',
    category: 'Criminal cases',
    name: 'Cheque Bounce (Sec 138 NI Act)',
    shortName: 'Cheque Dishonour',
    icon: 'FileText',
    description: 'Section 138 Negotiable Instruments Act complaint representation and trial defense.',
    caseTypes: [
      'Section 138 NI Act Dishonour of Cheque Complaint',
      'Cheque Bounce Trial Defense & Cross Examination',
      'Section 143A Interim Compensation Petition',
      'Out-of-court Compounding & Settlement Proceedings',
      'Quashing of False Cheque Dishonour Complaints'
    ]
  },
  {
    id: 'crim-fraud',
    category: 'Criminal cases',
    name: 'Cheating, Fraud & Forgery',
    shortName: 'Cheating & Forgery',
    icon: 'Briefcase',
    description: 'Section 420 cheating, criminal breach of trust, document forgery, and corporate crime.',
    caseTypes: [
      'Criminal Breach of Trust (Sec 406 IPC / BNS)',
      'Cheating & Dishonest Inducement (Sec 420 IPC / BNS)',
      'Forgery of Valuable Security, Agreement & Will (Sec 467/468)',
      'Criminal Conspiracy Defense (Sec 120B IPC)',
      'Economic Offenses Wing (EOW) Investigation Representation'
    ]
  },
  {
    id: 'crim-cybercrime',
    category: 'Criminal cases',
    name: 'Cybercrime & Digital Offenses',
    shortName: 'Cyber Crime',
    icon: 'ShieldCheck',
    description: 'Online banking phishing, cryptocurrency fraud, identity theft, data breaches, and IT Act.',
    caseTypes: [
      'Online Banking Phishing & UPI Fraud (IT Act Sec 66D)',
      'Identity Theft & Electronic Impersonation (IT Act Sec 66C)',
      'Cryptocurrency & Online Investment Scam Defense / Complaint',
      'Corporate Data Breach & Espionage (IT Act Sec 43/66)',
      'Cyber Defamation, Stalking & Blackmail'
    ]
  },
  {
    id: 'crim-quashing',
    category: 'Criminal cases',
    name: 'FIR Quashing & Criminal Appeals',
    shortName: 'Quashing & Appeals',
    icon: 'Scale',
    description: 'Section 482 CrPC petitions before High Court, revisions, and appeals against conviction.',
    caseTypes: [
      'Section 482 CrPC FIR Quashing Petition (High Court)',
      'Criminal Revision Petition (Sessions & High Court)',
      'Criminal Appeal against Conviction / Sentence',
      'Discharge Application before Judicial Magistrate',
      'Stay of Criminal Trial Proceedings'
    ]
  },

  // =========================================================================
  // 3. CONSTITUTIONAL/WRIT CASES
  // =========================================================================
  {
    id: 'const-writs',
    category: 'Constitutional/writ cases',
    name: 'Prerogative Writs (Article 226 & 32)',
    shortName: 'Writ Petitions',
    icon: 'Landmark',
    description: 'High Court & Supreme Court writ petitions against illegal state actions & arbitrary orders.',
    caseTypes: [
      'Writ of Mandamus (Directing public body to perform statutory duty)',
      'Writ of Certiorari (Quashing unlawful administrative/tribunal orders)',
      'Writ of Habeas Corpus (Challenging illegal detention / police custody)',
      'Writ of Quo Warranto (Challenging illegal public office tenure)',
      'Writ of Prohibition (Restraining tribunal from exceeding jurisdiction)'
    ]
  },
  {
    id: 'const-pil',
    category: 'Constitutional/writ cases',
    name: 'Public Interest Litigation (PIL)',
    shortName: 'PIL Petitions',
    icon: 'Users',
    description: 'Citizen litigations for public welfare, environmental conservation, and human rights.',
    caseTypes: [
      'PIL for Civic Infrastructure, Roads & Water Quality',
      'PIL for Environmental Preservation & Lake Protection',
      'PIL for Police Accountability & Citizen Human Rights',
      'PIL for Transparency in Public Procurement & Governance'
    ]
  },
  {
    id: 'const-fundamental',
    category: 'Constitutional/writ cases',
    name: 'Fundamental Rights & Legislative Validity',
    shortName: 'Fundamental Rights',
    icon: 'Scale',
    description: 'Article 14, 19, 21 challenges against arbitrary government notifications and bylaws.',
    caseTypes: [
      'Article 14 Equality & Arbitrary Administrative Order Challenge',
      'Article 19 Freedom of Trade, Business & Speech Restrictions',
      'Article 21 Personal Liberty, Privacy & Right to Livelihood',
      'Challenge to Constitutional Validity of State Statutes'
    ]
  },

  // =========================================================================
  // 4. FAMILY CASES
  // =========================================================================
  {
    id: 'fam-divorce',
    category: 'Family cases',
    name: 'Divorce & Judicial Separation',
    shortName: 'Divorce',
    icon: 'Users',
    description: 'Mutual consent divorce, contested divorce, judicial separation, and restitution of rights.',
    caseTypes: [
      'Mutual Consent Divorce (Section 13B Hindu Marriage Act / SMA)',
      'Contested Divorce on Grounds of Cruelty or Desertion',
      'Judicial Separation Petition',
      'Restitution of Conjugal Rights (Section 9 HMA)',
      'Annulment of Void & Voidable Marriage'
    ]
  },
  {
    id: 'fam-custody',
    category: 'Family cases',
    name: 'Child Custody & Guardianship',
    shortName: 'Child Custody',
    icon: 'Users',
    description: 'Permanent custody, interim visitation, shared parenting, and guardian appointment.',
    caseTypes: [
      'Permanent Child Custody Petition before Family Court',
      'Interim Custody & Weekend Visitation Rights Application',
      'Guardianship Application under Guardians & Wards Act',
      'International Child Relocation / Cross-Border Custody'
    ]
  },
  {
    id: 'fam-maintenance',
    category: 'Family cases',
    name: 'Maintenance & Permanent Alimony',
    shortName: 'Maintenance & Alimony',
    icon: 'Scale',
    description: 'Section 125 CrPC / BNSS, interim maintenance (HMA 24), and Stridhan recovery.',
    caseTypes: [
      'Section 125 CrPC / BNSS Maintenance Petition for Wife & Child',
      'Interim Maintenance Application (Sec 24 Hindu Marriage Act)',
      'Permanent Alimony & One-Time Financial Settlement',
      'Recovery of Stridhan & Matrimonial Jewelry',
      'Enhancement or Reduction of Monthly Maintenance Orders'
    ]
  },
  {
    id: 'fam-probate',
    category: 'Family cases',
    name: 'Succession, Wills & Probate',
    shortName: 'Wills & Probate',
    icon: 'FileText',
    description: 'Probate of will, succession certificate, letters of administration, and estate distribution.',
    caseTypes: [
      'Probate of Will Petition before Civil Court',
      'Succession Certificate Application for Bank Accounts & Shares',
      'Letters of Administration for Intestate Estates',
      'Challenge to Forged / Coerced Testamentary Will',
      'Family Settlement Agreement Drafting & Registration'
    ]
  },

  // =========================================================================
  // 5. COMMERCIAL/CORPORATE CASES
  // =========================================================================
  {
    id: 'comm-contracts',
    category: 'Commercial/corporate cases',
    name: 'Commercial Suits & Contract Disputes',
    shortName: 'Commercial Suits',
    icon: 'Briefcase',
    description: 'Commercial Courts Act proceedings, vendor agreements, and breach of business contracts.',
    caseTypes: [
      'Commercial Contract Breach & Liquidated Damages Suit',
      'Supply Chain & B2B Vendor Debt Recovery Action',
      'Specific Performance of Joint Development Agreements',
      'Pre-Institution Mediation under Commercial Courts Act',
      'Non-Disclosure Agreement (NDA) & Trade Secret Violation'
    ]
  },
  {
    id: 'comm-insolvency',
    category: 'Commercial/corporate cases',
    name: 'Insolvency Proceedings (NCLT / NCLAT)',
    shortName: 'NCLT Insolvency',
    icon: 'Building2',
    description: 'Insolvency and Bankruptcy Code (IBC) corporate resolution and operational claims.',
    caseTypes: [
      'Section 7 IBC Financial Creditor Insolvency Application',
      'Section 9 IBC Operational Creditor Debt Petition',
      'Section 10 Corporate Debtor Self-Insolvency Petition',
      'Approval & Challenge of CIRP Resolution Plans',
      'Insolvency Liquidation & Asset Auction Proceedings'
    ]
  },
  {
    id: 'comm-shareholder',
    category: 'Commercial/corporate cases',
    name: 'Shareholder & Company Petitions',
    shortName: 'Shareholder Disputes',
    icon: 'Handshake',
    description: 'Section 241/242 oppression & mismanagement, founder conflicts, and NCLT petitions.',
    caseTypes: [
      'Oppression & Mismanagement Petition (Sec 241/242 Companies Act)',
      'Shareholder Agreement (SHA) & Founder Deadlock Litigation',
      'Removal of Director Disqualification (Sec 164 Companies Act)',
      'Restoration of Struck-off Company (Sec 252 Companies Act)'
    ]
  },
  {
    id: 'comm-arbitration',
    category: 'Commercial/corporate cases',
    name: 'Arbitration & Award Enforcement',
    shortName: 'Arbitration',
    icon: 'Scale',
    description: 'Section 9 interim relief, Section 11 arbitrator appointments, and Section 34 challenges.',
    caseTypes: [
      'Section 9 Interim Measure Application (Arbitration Act)',
      'Section 11 Appointment of Arbitrator by High Court',
      'Section 34 Challenge to Set Aside Arbitral Award',
      'Section 36 Execution of Domestic & Foreign Arbitral Awards'
    ]
  },

  // =========================================================================
  // 6. CONSUMER CASES
  // =========================================================================
  {
    id: 'cons-homebuyer',
    category: 'Consumer cases',
    name: 'Homebuyer & Real Estate Deficiency',
    shortName: 'Homebuyer Forum',
    icon: 'Home',
    description: 'Delayed builder possession, compensation, and common amenity deficiency before NCDRC.',
    caseTypes: [
      'Delayed Flat Possession & Delay Compensation Complaint',
      'Full Refund of Booking Advance with Statutory 9-12% Interest',
      'Substandard Construction Quality & Unauthorized Floor Deviations',
      'Non-Provision of Promised Club House & Occupation Certificate'
    ]
  },
  {
    id: 'cons-insurance',
    category: 'Consumer cases',
    name: 'Insurance Repudiation & Banking Claims',
    shortName: 'Insurance Claims',
    icon: 'ShieldCheck',
    description: 'Health mediclaim, life insurance, motor own-damage, and bank fraud claims.',
    caseTypes: [
      'Health Mediclaim Repudiation Dispute on Pre-Existing Grounds',
      'Life Insurance / Term Insurance Death Claim Rejection',
      'Motor Vehicle Accidental Own-Damage Claim Rejection',
      'Unauthorized Banking Deductions & Fraudulent Card Transactions'
    ]
  },
  {
    id: 'cons-goods',
    category: 'Consumer cases',
    name: 'Defective Goods & Product Liability',
    shortName: 'Product Liability',
    icon: 'Briefcase',
    description: 'Automobiles, electronics, e-commerce fraud, and misleading advertisements.',
    caseTypes: [
      'Automobile Manufacturing Defect Replacement / Full Refund',
      'E-commerce Platform Counterfeit / Damaged Goods Claim',
      'Electronics & Home Appliance Warranty Denial Complaint',
      'Misleading Advertisement & Unfair Trade Practice Redressal'
    ]
  },
  {
    id: 'cons-medical',
    category: 'Consumer cases',
    name: 'Medical Negligence & Hospital Liability',
    shortName: 'Medical Negligence',
    icon: 'HeartPulse',
    description: 'Surgical error, misdiagnosis, hospital negligence compensation before State/National Commissions.',
    caseTypes: [
      'Surgical Negligence & Post-Operative Error Compensation Suit',
      'Diagnostic Center Misdiagnosis & Wrong Treatment Claim',
      'Hospital Deficiency in Emergency Care Liability Petition'
    ]
  },

  // =========================================================================
  // 7. LABOUR/EMPLOYMENT CASES
  // =========================================================================
  {
    id: 'lab-termination',
    category: 'Labour/employment cases',
    name: 'Wrongful Termination & Salary Recovery',
    shortName: 'Termination & Dues',
    icon: 'Briefcase',
    description: 'Unlawful dismissal, forced resignation, notice period pay, and severance recovery.',
    caseTypes: [
      'Unlawful Employment Termination & Reinstatement Challenge',
      'Recovery of Unpaid Salary, Bonus & Notice Period Arrears',
      'Forced Resignation & Breach of Employment Agreement',
      'Wrongful Retrenchment & Layoff Compensation Dispute'
    ]
  },
  {
    id: 'lab-posh',
    category: 'Labour/employment cases',
    name: 'Workplace Harassment (POSH)',
    shortName: 'POSH Matters',
    icon: 'Users',
    description: 'Internal Complaints Committee representation, POSH Act compliance, and appeals.',
    caseTypes: [
      'Workplace Sexual Harassment (POSH Act) Inquiry Representation',
      'Appeal Against Internal Complaints Committee (ICC) Findings',
      'Workplace Victimization & Retaliatory Transfer Defense'
    ]
  },
  {
    id: 'lab-benefits',
    category: 'Labour/employment cases',
    name: 'Gratuity, PF & Social Security',
    shortName: 'Gratuity & PF',
    icon: 'FileText',
    description: 'Payment of Gratuity Act, EPF dues, ESI claims, and maternity benefits.',
    caseTypes: [
      'Non-Payment of Gratuity Claim before Controlling Authority',
      'Employees Provident Fund (EPF) 7A Proceedings & Arrears',
      'Employee State Insurance (ESI) Benefit Denial Challenge',
      'Maternity Benefit Act Non-Compliance & Termination Dispute'
    ]
  },
  {
    id: 'lab-industrial',
    category: 'Labour/employment cases',
    name: 'Industrial Disputes & Trade Unions',
    shortName: 'Industrial Disputes',
    icon: 'Building2',
    description: 'Industrial Tribunal references, collective bargaining, and contract labour regularization.',
    caseTypes: [
      'Industrial Tribunal Reference under Industrial Disputes Act',
      'Contract Labour Regularization & Equal Pay for Equal Work',
      'Trade Union Recognition & Unfair Labour Practice Complaint',
      'Illegal Strike / Lockout Dispute Settlement'
    ]
  },

  // =========================================================================
  // 8. TAX CASES
  // =========================================================================
  {
    id: 'tax-income',
    category: 'Tax cases',
    name: 'Income Tax Assessment & ITAT Appeals',
    shortName: 'Income Tax',
    icon: 'FileText',
    description: 'Scrutiny assessments, Section 148 re-opening, CIT(A) appeals, and ITAT representation.',
    caseTypes: [
      'Income Tax Re-assessment Notice Defense (Section 148)',
      'Appeal before Commissioner of Income Tax (Appeals) - CIT(A)',
      'Income Tax Appellate Tribunal (ITAT) Representation',
      'Search, Seizure & Raid Asset Release Proceedings (Sec 132)',
      'Capital Gains Tax & Angel Tax Disallowance Appeal'
    ]
  },
  {
    id: 'tax-gst',
    category: 'Tax cases',
    name: 'Goods & Services Tax (GST) Disputes',
    shortName: 'GST Litigation',
    icon: 'Scale',
    description: 'Show Cause Notices, Input Tax Credit (ITC) blocks, and Section 107 GST appeals.',
    caseTypes: [
      'GST Show Cause Notice (SCN) Response & Audit Defense',
      'Input Tax Credit (ITC) Blockage & Reversal Dispute',
      'Appellate Authority Appeal under Section 107 CGST Act',
      'Revocation of Cancelled GST Registration Petition',
      'E-Way Bill Penalty & In-transit Goods Seizure Challenge'
    ]
  },
  {
    id: 'tax-customs',
    category: 'Tax cases',
    name: 'Customs Duty, Excise & CESTAT',
    shortName: 'Customs & Excise',
    icon: 'Briefcase',
    description: 'Tariff valuation, DRI summons, confiscation of cargo, and CESTAT appeals.',
    caseTypes: [
      'Customs Classification & Tariff Valuation Dispute',
      'Directorate of Revenue Intelligence (DRI) Summons Defense',
      'CESTAT Appellate Representation for Customs & Excise',
      'Confiscation of Cargo & Redemption Fine Challenge'
    ]
  },

  // =========================================================================
  // 9. ENVIRONMENTAL CASES
  // =========================================================================
  {
    id: 'env-ngt',
    category: 'Environmental cases',
    name: 'National Green Tribunal (NGT) Petitions',
    shortName: 'NGT Petitions',
    icon: 'Compass',
    description: 'Section 14 NGT applications, environmental damage compensation, and EC challenges.',
    caseTypes: [
      'Section 14 NGT Original Application for Environmental Damage',
      'Challenge to Environmental Clearance (EC) Granted to Projects',
      'River, Lake & Wetland Contamination Restitution Petition',
      'Industrial Effluent Discharge & Ground Water Pollution Stay'
    ]
  },
  {
    id: 'env-pcb',
    category: 'Environmental cases',
    name: 'Pollution Control Board (PCB) Notices',
    shortName: 'Pollution Board',
    icon: 'ShieldCheck',
    description: 'Consent to Establish (CTE), Consent to Operate (CTO), and closure notice defense.',
    caseTypes: [
      'State Pollution Control Board Closure Notice Defense (Air/Water Act)',
      'Consent to Operate (CTO) Denial & Appellate Appeal',
      'Hazardous Waste Management Regulatory Compliance Challenge',
      'Industrial Noise & Smoke Emission Penalty Defense'
    ]
  },
  {
    id: 'env-forest',
    category: 'Environmental cases',
    name: 'Forest, Wildlife & Coastal Zone (CRZ)',
    shortName: 'Forest & Coastal',
    icon: 'Landmark',
    description: 'Coastal Regulation Zone violations, forest conservation clearances, and illegal mining.',
    caseTypes: [
      'Coastal Regulation Zone (CRZ) Construction Violation Notice',
      'Forest Conservation Act De-reservation & Tree Felling Orders',
      'Illegal Stone Quarrying & Sand Mining Penalty Challenge',
      'Wildlife Sanctuary Eco-Sensitive Zone Restriction Disputes'
    ]
  },

  // =========================================================================
  // 10. ELECTION CASES
  // =========================================================================
  {
    id: 'elec-parliament',
    category: 'Election cases',
    name: 'Parliament & Assembly Election Petitions',
    shortName: 'Assembly Election',
    icon: 'Layers',
    description: 'High Court election petitions under Representation of the People Act, 1951.',
    caseTypes: [
      'High Court Election Petition (Representation of People Act, 1951)',
      'Corrupt Electoral Practices Challenge (Section 123 RP Act)',
      'Non-Disclosure of Criminal Cases / Assets in Form 26 Affidavit',
      'Recounting of EVM Votes & VVPAT Slip Verification Petition'
    ]
  },
  {
    id: 'elec-local-body',
    category: 'Election cases',
    name: 'Municipal & Panchayat Election Petitions',
    shortName: 'Local Body Elections',
    icon: 'Users',
    description: 'Corporation, municipality, and zilla parishad election validity and disqualification.',
    caseTypes: [
      'Municipal Corporation / Municipality Election Petition',
      'Gram Panchayat Sarpanch & Zilla Parishad Election Challenge',
      'Disqualification Petition for Office of Profit / Two-Child Norm',
      'Anti-Defection Law Disqualification Proceedings'
    ]
  },
  {
    id: 'elec-nomination',
    category: 'Election cases',
    name: 'Nominations & Electoral Rolls',
    shortName: 'Nomination & Symbols',
    icon: 'FileText',
    description: 'Wrongful rejection of nomination papers, voter list discrepancies, and MCC notices.',
    caseTypes: [
      'Challenge to Wrongful Rejection of Nomination Papers (Writ)',
      'Electoral Roll Bulk Deletion & Bogus Voter Inclusion Challenge',
      'Model Code of Conduct (MCC) Notice Defense & Representations',
      'Party Symbol Dispute Representation before Election Commission'
    ]
  },

  // =========================================================================
  // 11. LAND/REVENUE CASES
  // =========================================================================
  {
    id: 'rev-records',
    category: 'Land/revenue cases',
    name: 'Land Records, Mutation & Patta Disputes',
    shortName: 'Mutation & Patta',
    icon: 'Building2',
    description: 'Patta passbooks, RoR mutation, revenue record corrections (Dharani), and RDO appeals.',
    caseTypes: [
      'Revenue Mutation & Title Transfer Appeal before RDO',
      'Correction of RoR Revenue Records & Survey Discrepancies',
      'Cancellation of Fraudulent Revenue Patta / Khata Passbooks',
      'Inam & Jagir Land Title Vesting Dispute before Joint Collector',
      'Writ Petition against Revenue Inaction on Mutation Application'
    ]
  },
  {
    id: 'rev-acquisition',
    category: 'Land/revenue cases',
    name: 'Land Acquisition & Compensation',
    shortName: 'Land Acquisition',
    icon: 'Landmark',
    description: 'RFCTLARR Act 2013 notifications, compensation enhancement, and R&R packages.',
    caseTypes: [
      'Challenge to Section 11/19 Land Acquisition Notifications',
      'Market Value Compensation Enhancement Reference under Sec 64',
      'Rehabilitation & Resettlement (R&R) Package Entitlement Suit',
      'Disputed Apportionment of Acquisition Compensation between Heirs',
      'Delay in Compensation Award Deposit Interest Claim'
    ]
  },
  {
    id: 'rev-tenancy',
    category: 'Land/revenue cases',
    name: 'Agricultural Tenancy & Land Ceiling',
    shortName: 'Agricultural Tenancy',
    icon: 'Home',
    description: 'Protected tenancy, Land Reforms & Ceiling Act surplus declaration, and assigned land.',
    caseTypes: [
      'Protected Agricultural Tenancy Rights & Eviction Defense',
      'Agricultural Land Ceiling Surplus Declaration Proceedings',
      'Assigned Land Prohibition of Transfer (POT Act) Notice Defense',
      'Tenancy Succession Rights under State Land Reforms Acts'
    ]
  },
  {
    id: 'rev-encroachment',
    category: 'Land/revenue cases',
    name: 'Demarcation, Survey & Encroachment Eviction',
    shortName: 'Survey & Encroachment',
    icon: 'Compass',
    description: 'F-Line survey demarcation, Land Encroachment Act eviction notices, and Poramboke land.',
    caseTypes: [
      'F-Line Boundary Demarcation & Survey Application (Tahsildar)',
      'Defense against Eviction Notice under Land Encroachment Act',
      'Gram Kantham / Abadi Residential Land Title Regularization',
      'Government Poramboke / Gair Mamluk Land Possession Regularization'
    ]
  }
];

export const CITIES_AND_LOCALITIES = [
  {
    city: 'Hyderabad',
    popular: true,
    localities: [
      'Madhapur',
      'Gachibowli',
      'Banjara Hills',
      'Jubilee Hills',
      'Kondapur',
      'Kukatpally',
      'Begumpet',
      'Secunderabad',
      'Financial District',
      'Ameerpet',
      'Mehdipatnam',
      'Dilsukhnagar'
    ]
  },
  {
    city: 'Bengaluru',
    popular: true,
    localities: [
      'Indiranagar',
      'Koramangala',
      'Whitefield',
      'HSR Layout',
      'Jayanagar',
      'Malleshwaram',
      'Electronic City',
      'Marathahalli',
      'Bellandur',
      'Hebbal'
    ]
  },
  {
    city: 'Mumbai',
    popular: true,
    localities: [
      'Bandra West',
      'Nariman Point',
      'Andheri East',
      'Juhu',
      'Fort / Colaba',
      'Powai',
      'Thane West',
      'Navi Mumbai (Vashi)',
      'Dadar',
      'Borivali'
    ]
  },
  {
    city: 'Delhi NCR',
    popular: true,
    localities: [
      'Connaught Place',
      'South Extension',
      'Saket',
      'Gurugram Cyber Hub',
      'Noida Sector 62',
      'Dwarka',
      'Rohini',
      'Greater Kailash',
      'Vasant Kunj'
    ]
  },
  {
    city: 'Chennai',
    popular: false,
    localities: [
      'T. Nagar',
      'Anna Nagar',
      'Adyar',
      'Mylapore',
      'Velachery',
      'OMR / Perungudi',
      'Nungambakkam',
      'Kilpauk'
    ]
  },
  {
    city: 'Pune',
    popular: false,
    localities: [
      'Kothrud',
      'Viman Nagar',
      'Baner',
      'Hinjewadi',
      'Shivaji Nagar',
      'Koregaon Park',
      'Aundh',
      'Wakad'
    ]
  }
];

export const ADVOCATES = [
  {
    id: 'adv-1',
    name: 'Adv. Rajeshwar Rao',
    prefix: 'Adv.',
    title: 'Senior Civil & Real Estate Counsel',
    categories: ['Civil cases', 'Land/revenue cases', 'Commercial/corporate cases'],
    primaryCategory: 'Civil cases',
    barCouncilNumber: 'TS/1429/2008',
    experienceYears: 18,
    rating: 4.9,
    reviewCount: 142,
    city: 'Hyderabad',
    locality: 'Madhapur',
    officeAddress: 'Flat 402, Supreme Heights, Near Cyber Towers, Madhapur, Hyderabad - 500081',
    courts: ['Telangana High Court', 'City Civil Court Hyderabad', 'RERA Appellate Tribunal'],
    specializations: [
      'Money Recovery & Summary Suits',
      'Injunctions & Declaratory Relief',
      'Specific Performance of Contracts',
      'Land Records, Mutation & Patta Disputes',
      'Land Acquisition & Compensation'
    ],
    consultationFee: 2000,
    discountedFee: 1500,
    consultationModes: ['In-Person Office', 'Video Call', 'Phone Consultation'],
    languages: ['English', 'Telugu', 'Hindi'],
    bio: 'Dedicated real estate and civil litigation counsel with over 18 years of court experience in Telangana High Court and City Civil Courts. Specializes in land boundary disputes, title clearing, partition suits, and commercial contracts.',
    casesHandled: '650+',
    successRate: '94%',
    verifiedBadge: true,
    badgeLabel: 'Verified Bar Advocate',
    responseTime: '< 2 hours',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Tomorrow at 11:00 AM', 'Tomorrow at 3:30 PM', 'Wednesday at 10:00 AM']
  },
  {
    id: 'adv-2',
    name: 'Adv. Sravani Reddy',
    prefix: 'Adv.',
    title: 'Family, Matrimonial & Succession Specialist',
    categories: ['Family cases', 'Civil cases'],
    primaryCategory: 'Family cases',
    barCouncilNumber: 'TS/2218/2014',
    experienceYears: 11,
    rating: 4.8,
    reviewCount: 98,
    city: 'Hyderabad',
    locality: 'Gachibowli',
    officeAddress: 'Suit 301, Lex Towers, Financial District Rd, Gachibowli, Hyderabad - 500032',
    courts: ['Telangana High Court', 'Family Courts City Civil Court', 'Kukatpally District Court'],
    specializations: [
      'Divorce & Judicial Separation',
      'Child Custody & Guardianship',
      'Maintenance & Permanent Alimony',
      'Succession, Wills & Probate'
    ],
    consultationFee: 1800,
    discountedFee: 1400,
    consultationModes: ['Video Call', 'In-Person Office'],
    languages: ['English', 'Telugu'],
    bio: 'Renowned for empathetic yet sharp legal representation in matrimonial disputes, child custody, ancestral property partition, succession rights for women, and mutual consent divorce.',
    casesHandled: '420+',
    successRate: '96%',
    verifiedBadge: true,
    badgeLabel: 'Family Law Specialist',
    responseTime: '< 1 hour',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Today at 5:00 PM', 'Tomorrow at 2:00 PM', 'Thursday at 11:30 AM']
  },
  {
    id: 'adv-3',
    name: 'Adv. Tarun Bharadwaj',
    prefix: 'Adv.',
    title: 'Senior Criminal Defense & Trial Specialist',
    categories: ['Criminal cases'],
    primaryCategory: 'Criminal cases',
    barCouncilNumber: 'TS/1844/2009',
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 178,
    city: 'Hyderabad',
    locality: 'Banjara Hills',
    officeAddress: 'Chamber 204, Law Chambers Complex, Opp. Nampally Criminal Courts, Hyderabad - 500001',
    courts: ['Telangana High Court', 'Nampally Metropolitan Criminal Courts', 'CBI Special Court'],
    specializations: [
      'Bail & Anticipatory Bail',
      'Cheque Bounce (Sec 138 NI Act)',
      'Cheating, Fraud & Forgery',
      'Cybercrime & Digital Offenses',
      'FIR Quashing & Criminal Appeals'
    ],
    consultationFee: 2500,
    discountedFee: 2000,
    consultationModes: ['In-Person Office', 'Video Call'],
    languages: ['English', 'Telugu', 'Hindi'],
    bio: 'Accomplished criminal defense counsel specialized in urgent anticipatory bail, regular bail before High Court and Sessions, white collar fraud defense, Section 138 cheque bounce, and FIR quashing under Sec 482 CrPC.',
    casesHandled: '610+',
    successRate: '94%',
    verifiedBadge: true,
    badgeLabel: 'Criminal Bar Specialist',
    responseTime: '< 1 hour',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Today at 4:00 PM', 'Tomorrow at 11:30 AM', 'Thursday at 2:00 PM']
  },
  {
    id: 'adv-4',
    name: 'Adv. Meera Nambiar',
    prefix: 'Adv.',
    title: 'Supreme Court & High Court Constitutional Counsel',
    categories: ['Constitutional/writ cases', 'Election cases'],
    primaryCategory: 'Constitutional/writ cases',
    barCouncilNumber: 'D/2041/2007',
    experienceYears: 19,
    rating: 5.0,
    reviewCount: 195,
    city: 'Delhi NCR',
    locality: 'Connaught Place',
    officeAddress: 'Barakhamba Road, Near Mandi House, Connaught Place, New Delhi - 110001',
    courts: ['Supreme Court of India', 'Delhi High Court', 'Election Commission of India'],
    specializations: [
      'Prerogative Writs (Article 226 & 32)',
      'Public Interest Litigation (PIL)',
      'Fundamental Rights & Legislative Validity',
      'Parliament & Assembly Election Petitions'
    ],
    consultationFee: 3500,
    discountedFee: 3000,
    consultationModes: ['Video Call', 'In-Person Office'],
    languages: ['English', 'Hindi', 'Malayalam'],
    bio: 'Distinguished constitutional law practitioner with extensive appearances in Article 32 & 226 writ petitions before Supreme Court and Delhi High Court, PILs for civil liberties, and high-profile election petitions.',
    casesHandled: '740+',
    successRate: '96%',
    verifiedBadge: true,
    badgeLabel: 'Supreme Court Counsel',
    responseTime: '< 2 hours',
    photo: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Tomorrow at 10:00 AM', 'Wednesday at 3:00 PM', 'Friday at 11:00 AM']
  },
  {
    id: 'adv-5',
    name: 'Adv. Vikramaditya K.',
    prefix: 'Adv.',
    title: 'Commercial Litigation & Insolvency Specialist',
    categories: ['Commercial/corporate cases', 'Civil cases'],
    primaryCategory: 'Commercial/corporate cases',
    barCouncilNumber: 'KAR/1105/2010',
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 165,
    city: 'Bengaluru',
    locality: 'Indiranagar',
    officeAddress: '12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru - 560038',
    courts: ['Karnataka High Court', 'City Civil Court Bengaluru', 'NCLT Bengaluru Bench'],
    specializations: [
      'Commercial Suits & Contract Disputes',
      'Insolvency Proceedings (NCLT / NCLAT)',
      'Shareholder & Company Petitions',
      'Arbitration & Award Enforcement'
    ],
    consultationFee: 2500,
    discountedFee: 2000,
    consultationModes: ['Video Call', 'In-Person Office', 'Phone Consultation'],
    languages: ['English', 'Kannada', 'Hindi'],
    bio: 'Represents emerging startups, founders, and enterprises in corporate contracts, shareholder disputes, NCLT insolvency proceedings, and commercial arbitration enforcement.',
    casesHandled: '580+',
    successRate: '92%',
    verifiedBadge: true,
    badgeLabel: 'Top Rated Counsel',
    responseTime: '< 3 hours',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Tomorrow at 10:30 AM', 'Tomorrow at 4:00 PM', 'Friday at 2:30 PM']
  },
  {
    id: 'adv-6',
    name: 'Adv. Priya Ramanathan',
    prefix: 'Adv.',
    title: 'Consumer Protection & Labour Law Counsel',
    categories: ['Consumer cases', 'Labour/employment cases'],
    primaryCategory: 'Consumer cases',
    barCouncilNumber: 'MS/2019/2016',
    experienceYears: 9,
    rating: 4.7,
    reviewCount: 84,
    city: 'Chennai',
    locality: 'Adyar',
    officeAddress: 'Lattice Bridge Road, Adyar, Chennai - 600020',
    courts: ['Madras High Court', 'State Consumer Commission', 'Industrial Tribunal'],
    specializations: [
      'Homebuyer & Real Estate Deficiency',
      'Insurance Repudiation & Banking Claims',
      'Defective Goods & Product Liability',
      'Wrongful Termination & Salary Recovery',
      'Workplace Harassment (POSH)'
    ],
    consultationFee: 1500,
    discountedFee: 1200,
    consultationModes: ['Video Call', 'In-Person Office', 'Phone Consultation'],
    languages: ['English', 'Tamil', 'Hindi'],
    bio: 'Passionate counsel representing homebuyers and consumers in insurance repudiation, defective products, medical negligence, as well as employee wrongful dismissal and POSH inquiries.',
    casesHandled: '310+',
    successRate: '93%',
    verifiedBadge: true,
    badgeLabel: 'Consumer Rights Counsel',
    responseTime: '< 2 hours',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Tomorrow at 2:00 PM', 'Thursday at 11:00 AM']
  },
  {
    id: 'adv-7',
    name: 'Adv. Suresh Subramanian',
    prefix: 'Adv.',
    title: 'Direct & Indirect Tax Litigation Counsel',
    categories: ['Tax cases'],
    primaryCategory: 'Tax cases',
    barCouncilNumber: 'MAH/3820/2006',
    experienceYears: 18,
    rating: 4.9,
    reviewCount: 147,
    city: 'Mumbai',
    locality: 'Nariman Point',
    officeAddress: 'Maker Chambers VI, Nariman Point, Mumbai - 400021',
    courts: ['Bombay High Court', 'ITAT Mumbai', 'CESTAT', 'GST Appellate Authority'],
    specializations: [
      'Income Tax Assessment & ITAT Appeals',
      'Goods & Services Tax (GST) Disputes',
      'Customs Duty, Excise & CESTAT'
    ],
    consultationFee: 3000,
    discountedFee: 2500,
    consultationModes: ['In-Person Office', 'Video Call'],
    languages: ['English', 'Hindi', 'Gujarati'],
    bio: 'Specialist in Income Tax reassessment defense (Sec 148), GST audit appeals, Input Tax Credit (ITC) blockage, and Customs classification before CESTAT and High Court.',
    casesHandled: '540+',
    successRate: '95%',
    verifiedBadge: true,
    badgeLabel: 'Taxation Counsel',
    responseTime: '< 2 hours',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Tomorrow at 11:30 AM', 'Thursday at 4:00 PM']
  },
  {
    id: 'adv-8',
    name: 'Adv. Sunita Dharmadhikari',
    prefix: 'Adv.',
    title: 'National Green Tribunal & Environmental Law Counsel',
    categories: ['Environmental cases', 'Constitutional/writ cases'],
    primaryCategory: 'Environmental cases',
    barCouncilNumber: 'D/1628/2012',
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 104,
    city: 'Delhi NCR',
    locality: 'Saket',
    officeAddress: 'Press Enclave Road, Saket, New Delhi - 110017',
    courts: ['National Green Tribunal (Principal Bench)', 'Delhi High Court', 'Supreme Court of India'],
    specializations: [
      'National Green Tribunal (NGT) Petitions',
      'Pollution Control Board (PCB) Notices',
      'Forest, Wildlife & Coastal Zone (CRZ)'
    ],
    consultationFee: 2200,
    discountedFee: 1800,
    consultationModes: ['Video Call', 'In-Person Office'],
    languages: ['English', 'Hindi', 'Marathi'],
    bio: 'Dedicated environmental advocate arguing before the NGT Principal Bench and High Courts on Environmental Clearances, industrial effluent violations, waterbody contamination, and CRZ violations.',
    casesHandled: '370+',
    successRate: '94%',
    verifiedBadge: true,
    badgeLabel: 'NGT Environmental Bar',
    responseTime: '< 3 hours',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Today at 6:00 PM', 'Wednesday at 2:00 PM']
  },
  {
    id: 'adv-9',
    name: 'Adv. Harpreet Singh Bhasin',
    prefix: 'Adv.',
    title: 'Land Records, Revenue & Election Petitions Counsel',
    categories: ['Land/revenue cases', 'Election cases', 'Civil cases'],
    primaryCategory: 'Land/revenue cases',
    barCouncilNumber: 'D/1944/2011',
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 130,
    city: 'Delhi NCR',
    locality: 'Connaught Place',
    officeAddress: 'Barakhamba Road, Connaught Place, New Delhi - 110001',
    courts: ['Delhi High Court', 'Revenue Divisional Courts', 'Tis Hazari Court'],
    specializations: [
      'Land Records, Mutation & Patta Disputes',
      'Land Acquisition & Compensation',
      'Agricultural Tenancy & Land Ceiling',
      'Demarcation, Survey & Encroachment Eviction',
      'Parliament & Assembly Election Petitions'
    ],
    consultationFee: 2200,
    discountedFee: 1800,
    consultationModes: ['In-Person Office', 'Video Call'],
    languages: ['English', 'Hindi', 'Punjabi'],
    bio: 'Experienced counsel handling high-value land acquisition compensation enhancement, revenue mutation appeals, agricultural tenancy rights, and election petitions under the RP Act 1951.',
    casesHandled: '510+',
    successRate: '91%',
    verifiedBadge: true,
    badgeLabel: 'Revenue & Land Specialist',
    responseTime: '< 3 hours',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Today at 4:30 PM', 'Wednesday at 11:30 AM', 'Friday at 3:00 PM']
  },
  {
    id: 'adv-10',
    name: 'Adv. Gautam Sundaram',
    prefix: 'Adv.',
    title: 'Cybercrime, Cheque Bounce & Digital Fraud Counsel',
    categories: ['Criminal cases', 'Commercial/corporate cases'],
    primaryCategory: 'Criminal cases',
    barCouncilNumber: 'KAR/2890/2015',
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 92,
    city: 'Bengaluru',
    locality: 'Indiranagar',
    officeAddress: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru - 560038',
    courts: ['Karnataka High Court', 'Cyber Crime Police Station (CCPS) Courts', 'City Civil & Sessions Court'],
    specializations: [
      'Cybercrime & Digital Offenses',
      'Cheque Bounce (Sec 138 NI Act)',
      'Cheating, Fraud & Forgery'
    ],
    consultationFee: 2000,
    discountedFee: 1600,
    consultationModes: ['Video Call', 'In-Person Office', 'Phone Consultation'],
    languages: ['English', 'Kannada', 'Tamil', 'Hindi'],
    bio: 'Tech-savvy legal counsel handling corporate cybercrime investigations, cryptocurrency fraud cases, Section 138 NI Act dishonour suits, and digital identity theft defense.',
    casesHandled: '340+',
    successRate: '95%',
    verifiedBadge: true,
    badgeLabel: 'Cyber Law Counsel',
    responseTime: '< 1 hour',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=360',
    availableSlots: ['Today at 5:30 PM', 'Tomorrow at 1:00 PM']
  }
];

export const LEGAL_KNOWLEDGE_ARTICLES = [
  {
    id: 'property-title-verification',
    title: '12 Essential Documents to Verify Before Buying Property in India',
    category: 'Land & Property',
    readTime: '6 min read',
    publishedDate: 'November 2026',
    author: 'Adv. Rajeshwar Rao',
    summary: 'A comprehensive checklist covering mother deed, encumbrance certificate, revenue mutation, and RERA approvals to avoid disputed land.',
    tags: ['Property Due Diligence', 'Sale Deed', 'Encumbrance Certificate', 'RERA'],
    content: `Buying real estate is one of the biggest lifetime investments. Always demand mother deeds (30 years), Encumbrance Certificate (Form 15), approved layout sanctions, and verified revenue mutation entries.`
  },
  {
    id: 'bail-procedure-rights',
    title: 'Anticipatory & Regular Bail in India: Procedure, Grounds & Citizen Rights',
    category: 'Criminal Law',
    readTime: '6 min read',
    publishedDate: 'October 2026',
    author: 'Adv. Tarun Bharadwaj',
    summary: 'Understanding Section 438 anticipatory bail vs regular bail, key factors considered by courts, and legal protections against arbitrary arrest.',
    tags: ['Bail Rights', 'CrPC 438', 'BNSS', 'Criminal Defense'],
    content: `Under Article 21 of the Constitution of India, the Supreme Court has consistently held that "Bail is the rule, jail is the exception." When an arrest is apprehended, an anticipatory bail petition can be filed before the Sessions Court or High Court.`
  },
  {
    id: 'writ-remedies-high-court',
    title: 'Filing a Writ Petition Under Article 226: When and How to Challenge State Inaction',
    category: 'Constitutional Law',
    readTime: '7 min read',
    publishedDate: 'September 2026',
    author: 'Adv. Meera Nambiar',
    summary: 'How to invoke extraordinary writ jurisdiction of the High Court against arbitrary government orders, unnotified demolitions, or tender cancellations.',
    tags: ['Article 226', 'Writ of Mandamus', 'Certiorari', 'High Court'],
    content: `Article 226 gives High Courts expansive powers to issue prerogative writs to any person or authority, including any Government, for enforcement of fundamental rights and administrative justice.`
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Kalyan Chakravarthy',
    role: 'IT Project Manager, Hitec City',
    location: 'Hyderabad',
    caseType: 'Land Records & Revenue Mutation',
    quote: 'NIRNAI made finding an experienced land lawyer effortless. Adv. Rajeshwar Rao resolved critical encumbrances on our villa land in Madhapur.',
    rating: 5,
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 't-2',
    name: 'Meenakshi Sundaram',
    role: 'Co-founder, Tech Startup',
    location: 'Bengaluru',
    caseType: 'Commercial Contract & Arbitration',
    quote: 'We needed urgent advice on a breach of contract with a vendor. Through NIRNAI, we booked a video consultation with Adv. Vikramaditya within 2 hours.',
    rating: 5,
    date: '1 month ago',
    verified: true
  },
  {
    id: 't-3',
    name: 'Vikram Joshi',
    role: 'Chartered Accountant',
    location: 'Mumbai',
    caseType: 'GST Assessment Appeal',
    quote: 'Adv. Suresh Subramanian handled our GST audit notice before the Appellate Authority with precision and achieved complete relief.',
    rating: 5,
    date: '3 weeks ago',
    verified: true
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Select Case Category & Location',
    description: 'Pick from the 11 official case categories (Civil, Criminal, Constitutional, Family, Commercial, Consumer, Tax, Land/Revenue, etc.), then choose your legal issue.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Compare Verified Bar Advocates',
    description: 'Browse verified profiles with Bar Council numbers, court affiliations, verified client reviews, and transparent consultation fees.',
    icon: 'ShieldCheck'
  },
  {
    step: '03',
    title: 'Book Consultation Instantly',
    description: 'Choose Video Consultation, Chamber Meeting, or Phone Call at your preferred time slot. Receive instant confirmation & case document guidance.',
    icon: 'CalendarCheck'
  }
];

export const FAQS = [
  {
    question: 'What are the 11 Case Categories available on NIRNAI?',
    answer: 'NIRNAI covers: 1) Civil cases, 2) Criminal cases, 3) Constitutional/writ cases, 4) Family cases, 5) Commercial/corporate cases, 6) Consumer cases, 7) Labour/employment cases, 8) Tax cases, 9) Environmental cases, 10) Election cases, and 11) Land/revenue cases.'
  },
  {
    question: 'How does the cascading search work?',
    answer: 'Selecting a Case Category dynamically populates only the Legal Issues that belong to that category. Then, selecting a Legal Issue dynamically shows its specific Case Types. Similarly, picking a City updates the available local areas.'
  },
  {
    question: 'How do you verify advocates on NIRNAI?',
    answer: 'Every advocate on NIRNAI undergoes a verification check. We cross-check their State Bar Council enrollment number, active years of practice, court appearances, and good standing before listing them.'
  },
  {
    question: 'Can I consult an advocate online via video or phone?',
    answer: 'Yes! Advocates offer Video Consultation, In-Person Chamber visits, and Phone calls. You can choose your preferred mode during booking.'
  }
];

export const TRUST_METRICS = [
  { number: '1,800+', label: 'Verified Advocates' },
  { number: '12,500+', label: 'Clients Guided' },
  { number: '96.4%', label: 'Positive Resolution Rate' },
  { number: '11', label: 'Case Categories Covered' }
];
