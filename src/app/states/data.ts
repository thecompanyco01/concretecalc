// State data for programmatic SEO pages
// Each state has licensing info, cost data, and business requirements

export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  licensingBody: string;
  licensingUrl: string;
  licenseRequired: boolean;
  licenseType: string;
  examRequired: boolean;
  avgCostPerYard: number; // ready-mix concrete
  avgLaborPerSqFt: number;
  insuranceMinimum: string;
  bondRequired: boolean;
  bondAmount: string;
  frostLineDepth: string;
  climate: string;
  topCities: string[];
  population: string;
  constructionGrowth: string; // YoY
  notes: string;
}

export const STATES: StateData[] = [
  {
    name: "Alabama",
    slug: "alabama",
    abbreviation: "AL",
    licensingBody: "Alabama Licensing Board for General Contractors",
    licensingUrl: "https://genconbd.alabama.gov",
    licenseRequired: true,
    licenseType: "General Contractor License (projects >$50,000)",
    examRequired: true,
    avgCostPerYard: 135,
    avgLaborPerSqFt: 5.50,
    insuranceMinimum: "$300,000 general liability",
    bondRequired: true,
    bondAmount: "$10,000-$25,000",
    frostLineDepth: "6-12 inches",
    climate: "Subtropical — year-round pouring possible, watch for humidity in summer",
    topCities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"],
    population: "5.1 million",
    constructionGrowth: "+4.2%",
    notes: "No specific concrete license — falls under general contractor. Projects under $50K may not require license depending on municipality."
  },
  {
    name: "Alaska",
    slug: "alaska",
    abbreviation: "AK",
    licensingBody: "Alaska Department of Commerce",
    licensingUrl: "https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/GeneralContractor.aspx",
    licenseRequired: true,
    licenseType: "General Contractor License",
    examRequired: true,
    avgCostPerYard: 195,
    avgLaborPerSqFt: 9.00,
    insuranceMinimum: "$500,000 general liability",
    bondRequired: true,
    bondAmount: "$25,000",
    frostLineDepth: "60-100 inches",
    climate: "Arctic/Subarctic — very short pouring season (May-September), permafrost challenges",
    topCities: ["Anchorage", "Fairbanks", "Juneau", "Wasilla", "Sitka"],
    population: "733,000",
    constructionGrowth: "+2.1%",
    notes: "Extreme frost line depths require deep footings. Concrete curing in cold temps requires heated enclosures. Premium pricing justified by harsh conditions."
  },
  {
    name: "Arizona",
    slug: "arizona",
    abbreviation: "AZ",
    licensingBody: "Arizona Registrar of Contractors",
    licensingUrl: "https://roc.az.gov",
    licenseRequired: true,
    licenseType: "C-9 Concrete Contractor License (specialty)",
    examRequired: true,
    avgCostPerYard: 145,
    avgLaborPerSqFt: 6.00,
    insuranceMinimum: "$300,000 general liability",
    bondRequired: true,
    bondAmount: "$2,500-$7,500",
    frostLineDepth: "0-12 inches",
    climate: "Desert — year-round pouring but extreme heat in summer requires early morning pours and curing protection",
    topCities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"],
    population: "7.4 million",
    constructionGrowth: "+8.1%",
    notes: "One of few states with SPECIFIC concrete contractor license (C-9). Rapid population growth = strong demand. Summer pours require special hot-weather concrete practices."
  },
  {
    name: "California",
    slug: "california",
    abbreviation: "CA",
    licensingBody: "Contractors State License Board (CSLB)",
    licensingUrl: "https://www.cslb.ca.gov",
    licenseRequired: true,
    licenseType: "C-8 Concrete Contractor License",
    examRequired: true,
    avgCostPerYard: 175,
    avgLaborPerSqFt: 8.50,
    insuranceMinimum: "$1,000,000 general liability",
    bondRequired: true,
    bondAmount: "$25,000 contractor bond",
    frostLineDepth: "6-24 inches (varies by region)",
    climate: "Mediterranean to desert — year-round pouring in most regions, watch for wildfire season disruptions",
    topCities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"],
    population: "39.0 million",
    constructionGrowth: "+3.8%",
    notes: "Largest concrete market in the US. C-8 specialty license required. High labor costs but high demand. Seismic requirements add complexity and cost to foundation work."
  },
  {
    name: "Colorado",
    slug: "colorado",
    abbreviation: "CO",
    licensingBody: "Varies by municipality (no state license)",
    licensingUrl: "https://dora.colorado.gov",
    licenseRequired: false,
    licenseType: "No state license — local permits may apply",
    examRequired: false,
    avgCostPerYard: 155,
    avgLaborPerSqFt: 7.00,
    insuranceMinimum: "Varies by municipality",
    bondRequired: false,
    bondAmount: "N/A",
    frostLineDepth: "36-48 inches",
    climate: "Semi-arid — pouring season March-November, deep frost lines in mountains",
    topCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"],
    population: "5.9 million",
    constructionGrowth: "+5.9%",
    notes: "No state contractor license but Denver, Colorado Springs, and most cities require local registration. Deep frost lines mean more expensive footings. Altitude affects curing."
  },
  {
    name: "Florida",
    slug: "florida",
    abbreviation: "FL",
    licensingBody: "Florida Construction Industry Licensing Board",
    licensingUrl: "https://www.myfloridalicense.com/dbpr/pro/cilb/",
    licenseRequired: true,
    licenseType: "Certified or Registered Contractor",
    examRequired: true,
    avgCostPerYard: 150,
    avgLaborPerSqFt: 6.50,
    insuranceMinimum: "$300,000 general liability",
    bondRequired: false,
    bondAmount: "N/A",
    frostLineDepth: "0 inches (no frost line)",
    climate: "Subtropical — year-round pouring, but rain season (June-October) causes delays. Hurricane season impacts scheduling.",
    topCities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
    population: "22.6 million",
    constructionGrowth: "+7.2%",
    notes: "Massive construction market with year-round demand. No frost line = simpler footings. Hurricane building codes add requirements for concrete structures. Population boom driving growth."
  },
  {
    name: "Georgia",
    slug: "georgia",
    abbreviation: "GA",
    licensingBody: "Georgia Secretary of State (registration only)",
    licensingUrl: "https://sos.ga.gov/index.php/licensing/plb/25",
    licenseRequired: false,
    licenseType: "Business registration only — no contractor license required",
    examRequired: false,
    avgCostPerYard: 140,
    avgLaborPerSqFt: 5.75,
    insuranceMinimum: "No state minimum — recommended $500,000",
    bondRequired: false,
    bondAmount: "N/A",
    frostLineDepth: "12 inches",
    climate: "Humid subtropical — year-round pouring possible, hot summers require early morning pours",
    topCities: ["Atlanta", "Augusta", "Savannah", "Columbus", "Macon"],
    population: "11.0 million",
    constructionGrowth: "+6.4%",
    notes: "One of the easiest states to start a concrete business — no license required, just business registration. Atlanta metro area has explosive growth. Low barrier to entry means more competition."
  },
  {
    name: "Illinois",
    slug: "illinois",
    abbreviation: "IL",
    licensingBody: "Varies by municipality",
    licensingUrl: "https://idfpr.illinois.gov",
    licenseRequired: false,
    licenseType: "No state license — Chicago requires license, other cities vary",
    examRequired: false,
    avgCostPerYard: 155,
    avgLaborPerSqFt: 7.50,
    insuranceMinimum: "Varies — Chicago requires $1M",
    bondRequired: false,
    bondAmount: "Chicago: $5,000-$50,000",
    frostLineDepth: "36-42 inches",
    climate: "Continental — pouring season April-November, cold winters halt work",
    topCities: ["Chicago", "Aurora", "Naperville", "Rockford", "Joliet"],
    population: "12.5 million",
    constructionGrowth: "+2.3%",
    notes: "Chicago has strict licensing and union requirements. Downstate is much less regulated. Deep frost lines = expensive footings. Union labor in Chicago area increases costs significantly."
  },
  {
    name: "Michigan",
    slug: "michigan",
    abbreviation: "MI",
    licensingBody: "Michigan Department of Licensing and Regulatory Affairs",
    licensingUrl: "https://www.michigan.gov/lara",
    licenseRequired: true,
    licenseType: "Residential Builder License (for residential work)",
    examRequired: true,
    avgCostPerYard: 150,
    avgLaborPerSqFt: 6.50,
    insuranceMinimum: "$500,000 general liability",
    bondRequired: false,
    bondAmount: "N/A",
    frostLineDepth: "42-48 inches",
    climate: "Continental — short pouring season (April-October), heavy freeze-thaw cycles damage concrete",
    topCities: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing", "Flint"],
    population: "10.0 million",
    constructionGrowth: "+3.1%",
    notes: "Deep frost lines (42-48 inches) make footings expensive. Freeze-thaw cycles mean air-entrained concrete is mandatory. Short season creates seasonal demand spikes."
  },
  {
    name: "New York",
    slug: "new-york",
    abbreviation: "NY",
    licensingBody: "Varies by municipality — NYC DOB for NYC",
    licensingUrl: "https://www.nyc.gov/buildings",
    licenseRequired: false,
    licenseType: "NYC requires license; rest of state varies",
    examRequired: false,
    avgCostPerYard: 170,
    avgLaborPerSqFt: 9.00,
    insuranceMinimum: "NYC: $2,000,000; rest varies",
    bondRequired: false,
    bondAmount: "NYC: varies by project",
    frostLineDepth: "36-48 inches",
    climate: "Continental — pouring season April-November, harsh winters",
    topCities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    population: "19.5 million",
    constructionGrowth: "+2.8%",
    notes: "NYC is the most expensive and heavily regulated concrete market in the US. Upstate is more affordable. Union labor in NYC adds 30-50% to labor costs. Prevailing wage requirements on public projects."
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    abbreviation: "NC",
    licensingBody: "NC Licensing Board for General Contractors",
    licensingUrl: "https://www.nclbgc.org",
    licenseRequired: true,
    licenseType: "General Contractor License (projects >$30,000)",
    examRequired: true,
    avgCostPerYard: 140,
    avgLaborPerSqFt: 5.75,
    insuranceMinimum: "$300,000 general liability",
    bondRequired: false,
    bondAmount: "N/A",
    frostLineDepth: "12-18 inches",
    climate: "Humid subtropical — year-round pouring in coastal areas, mountain regions have shorter season",
    topCities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"],
    population: "10.8 million",
    constructionGrowth: "+6.8%",
    notes: "Rapid growth in Charlotte and Triangle (Raleigh-Durham) metro areas. License required only for projects over $30,000 — small jobs are unregulated. Good state for new concrete businesses."
  },
  {
    name: "Ohio",
    slug: "ohio",
    abbreviation: "OH",
    licensingBody: "Varies by municipality",
    licensingUrl: "https://com.ohio.gov",
    licenseRequired: false,
    licenseType: "No state license — Columbus, Cleveland, Cincinnati require local licenses",
    examRequired: false,
    avgCostPerYard: 140,
    avgLaborPerSqFt: 6.00,
    insuranceMinimum: "Varies by city",
    bondRequired: false,
    bondAmount: "Varies",
    frostLineDepth: "32-40 inches",
    climate: "Continental — pouring season April-November",
    topCities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    population: "11.8 million",
    constructionGrowth: "+3.5%",
    notes: "No state license makes it easy to start. Major cities have their own requirements. \"concrete cost per yard ohio\" gets 140 searches/mo — significant local demand."
  },
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    abbreviation: "PA",
    licensingBody: "Varies by municipality",
    licensingUrl: "https://www.dos.pa.gov",
    licenseRequired: false,
    licenseType: "No state license — Philadelphia and Pittsburgh require local licenses",
    examRequired: false,
    avgCostPerYard: 155,
    avgLaborPerSqFt: 7.00,
    insuranceMinimum: "Varies",
    bondRequired: false,
    bondAmount: "Varies",
    frostLineDepth: "36-42 inches",
    climate: "Continental — pouring season April-November, heavy freeze-thaw",
    topCities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
    population: "12.9 million",
    constructionGrowth: "+2.5%",
    notes: "Large infrastructure market. Philadelphia area has union labor requirements. Deep frost lines across the state."
  },
  {
    name: "Texas",
    slug: "texas",
    abbreviation: "TX",
    licensingBody: "No state licensing board for contractors",
    licensingUrl: "https://www.tdlr.texas.gov",
    licenseRequired: false,
    licenseType: "No state license — some cities require registration",
    examRequired: false,
    avgCostPerYard: 140,
    avgLaborPerSqFt: 5.50,
    insuranceMinimum: "No state minimum",
    bondRequired: false,
    bondAmount: "N/A",
    frostLineDepth: "6-20 inches (varies by region)",
    climate: "Varies — year-round pouring in South Texas, seasonal in Panhandle. Extreme heat in summer.",
    topCities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth"],
    population: "30.5 million",
    constructionGrowth: "+9.2%",
    notes: "Largest construction market with minimal regulation. No state contractor license = very easy to start. Massive population growth driving demand. Expansive clay soils in many areas require special foundation design (pier and beam or post-tensioned slab)."
  },
  {
    name: "Washington",
    slug: "washington",
    abbreviation: "WA",
    licensingBody: "Washington State Department of Labor & Industries",
    licensingUrl: "https://www.lni.wa.gov/licensing-permits/contractors/",
    licenseRequired: true,
    licenseType: "General Contractor Registration",
    examRequired: false,
    avgCostPerYard: 165,
    avgLaborPerSqFt: 7.50,
    insuranceMinimum: "$600,000 general liability",
    bondRequired: true,
    bondAmount: "$12,000",
    frostLineDepth: "18-36 inches (varies by region)",
    climate: "Marine west coast (west) to semi-arid (east) — rain delays in western WA, year-round pouring possible in eastern WA",
    topCities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
    population: "7.9 million",
    constructionGrowth: "+5.1%",
    notes: "Seattle area has high demand and high costs. Registration required but no exam. Seismic zone requirements for foundations. Rain delays are a major factor in western Washington."
  }
];

// Helper: Get all state slugs for static generation
export function getAllStateSlugs(): string[] {
  return STATES.map(s => s.slug);
}

// Helper: Get state by slug
export function getStateBySlug(slug: string): StateData | undefined {
  return STATES.find(s => s.slug === slug);
}

// All 50 US states for full programmatic SEO (we'll add the remaining 35 states over time)
export const ALL_STATE_NAMES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];
