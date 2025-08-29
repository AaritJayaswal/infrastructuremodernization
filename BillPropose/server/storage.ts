import { type User, type InsertUser, type Bill, type InsertBill } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBill(id: string): Promise<Bill | undefined>;
  getAllBills(): Promise<Bill[]>;
  createBill(bill: InsertBill): Promise<Bill>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private bills: Map<string, Bill>;

  constructor() {
    this.users = new Map();
    this.bills = new Map();
    this.initializeBills();
  }

  private initializeBills() {
    const billContent = {
      overview: {
        title: "National Resilient Infrastructure Act of 2025",
        subtitle: "A Legislative Proposal for Climate-Resilient and Cybersecure Infrastructure",
        purpose: [
          "Whereas the infrastructure of the United States, including its roads, bridges, water systems, and power grids, faces unprecedented threats from accelerating climate change, including extreme weather events, and sophisticated cyberattacks;",
          "Whereas the failure to modernize and secure these vital systems leads to catastrophic economic losses, endangers public safety, degrades quality of life, and undermines national security;",
          "Whereas existing federal efforts, while commendable, often lack comprehensive, mandatory standards for integrating climate resilience and cybersecurity into all aspects of infrastructure planning, design, and maintenance;",
          "Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled, that this Act shall establish a proactive national strategy to build and protect a resilient infrastructure system capable of withstanding 21st-century threats."
        ],
        keyProvisions: [
          {
            title: "Climate Resilience",
            description: "Mandatory climate resilience standards for all federally-funded infrastructure projects, requiring designs that account for climate stressors.",
            icon: "climate"
          },
          {
            title: "Cybersecurity",
            description: "Enhanced cybersecurity requirements and $500M annually for critical infrastructure protection against cyber threats.",
            icon: "security"
          },
          {
            title: "Workforce Development",
            description: "$200M annually for training programs focused on climate-resilient infrastructure and operational cybersecurity skills.",
            icon: "workforce"
          },
          {
            title: "Innovation",
            description: "$100M annually for pilot programs testing innovative technologies for infrastructure resilience and smart grid solutions.",
            icon: "innovation"
          }
        ],
        funding: {
          source: "0.5% surtax on corporate stock buybacks exceeding $1 million annually, projected to generate $2 billion per year.",
          fund: "All revenue deposited into the National Infrastructure Resilience Fund, exclusively for programs outlined in this Act."
        }
      },
      climate: {
        title: "Mandatory Climate Resilience Standards",
        sections: [
          {
            number: "1.1",
            title: "Establishment of Standards",
            content: "The Secretary of Transportation, in consultation with the Administrator of the Environmental Protection Agency (EPA) and the Director of the National Oceanic and Atmospheric Administration (NOAA), shall, within 18 months of enactment, develop and implement mandatory climate resilience standards for all new and significantly upgraded infrastructure projects receiving federal funding. These standards shall require project designs to account for localized climate projections, extreme weather events, and long-term environmental changes over the expected lifespan of the infrastructure."
          },
          {
            number: "1.2", 
            title: "Resilient Design Requirements",
            content: "All federal agencies providing infrastructure funding shall ensure that recipient entities incorporate resilient design features as a condition of receiving federal funds, including: elevating critical assets above projected flood levels, utilizing nature-based solutions (permeable surfaces, wetlands restoration, mangrove protection), employing materials robust to projected climate stressors, and implementing redundant systems for critical infrastructure components."
          },
          {
            number: "1.3",
            title: "Climate Risk Assessments", 
            content: "The Secretary of Transportation shall require all federal infrastructure funding applications to include a comprehensive climate risk assessment, detailing vulnerabilities and proposed mitigation strategies, as part of the application process. These assessments must be prepared by qualified professionals and updated every five years for ongoing projects."
          }
        ],
        timeline: [
          { month: 6, milestone: "Initial standards draft published for public comment" },
          { month: 12, milestone: "Final standards published and agency guidance issued" },
          { month: 18, milestone: "Full implementation for all new federal funding" }
        ]
      },
      cybersecurity: {
        title: "Enhanced Cybersecurity for Critical Infrastructure",
        sections: [
          {
            number: "2.1",
            title: "Cybersecurity Protection Mandate",
            content: "The Director of the Cybersecurity and Infrastructure Security Agency (CISA), in consultation with the Secretary of Energy and relevant sector-specific agencies, shall, within 12 months of enactment, establish and enforce mandatory minimum cybersecurity performance requirements for all critical infrastructure entities deemed to be of high-impact risk to national security or public safety. These requirements shall include, but not be limited to, multifactor authentication, encryption, robust network segmentation, and regular vulnerability assessments."
          },
          {
            number: "2.2",
            title: "Critical Infrastructure Cybersecurity Grant Program",
            content: "There is hereby established a Critical Infrastructure Cybersecurity Grant Program, administered by CISA, to provide $500,000,000 annually for five fiscal years to state, local, and tribal governments, as well as privately owned critical infrastructure entities, to implement the cybersecurity requirements mandated in this section and to invest in advanced cybersecurity technologies and training."
          },
          {
            number: "2.3",
            title: "Incident Reporting and Information Sharing",
            content: "This Act shall amend current law to require mandatory and timely reporting of significant cyber incidents affecting critical infrastructure to CISA, and shall establish a secure, anonymous platform for enhanced threat intelligence sharing between government and critical infrastructure operators, with legal protections for shared information."
          }
        ],
        allocation: {
          technology: 60,
          training: 25,
          response: 15
        }
      },
      workforce: {
        title: "Workforce Development and Innovation",
        sections: [
          {
            number: "3.1",
            title: "Resilient Infrastructure Workforce Grants",
            content: "The Secretary of Labor, in coordination with the Department of Education, shall establish a grant program to provide $200,000,000 annually for five fiscal years to community colleges, vocational schools, and apprenticeship programs to develop curricula and training programs focused on skills necessary for climate-resilient infrastructure design, construction, maintenance, and cybersecurity for operational technology. Priority shall be given to programs that partner with local labor unions and target underserved communities."
          },
          {
            number: "3.2",
            title: "Innovation and Pilot Program",
            content: "The Department of Commerce, in partnership with relevant federal agencies, shall establish a 'Resilient Infrastructure Innovation Pilot Program,' providing $100,000,000 annually for three fiscal years for competitive grants to state and local governments, universities, and private companies to pilot innovative technologies such as advanced materials for infrastructure, smart grid solutions for grid resilience, artificial intelligence for predictive maintenance, and next-generation cybersecurity defenses for operational technology."
          }
        ],
        outcomes: {
          training: {
            workers: "50,000+",
            colleges: "200+",
            programs: "150+"
          },
          innovation: {
            projects: "100+",
            partnerships: "50+",
            patents: "25+"
          }
        }
      },
      funding: {
        title: "Funding and Oversight",
        sections: [
          {
            number: "4.1",
            title: "Funding Mechanism",
            content: "To ensure dedicated and sustainable funding for the provisions of this Act, the Secretary of the Treasury shall implement a 0.5% surtax on all corporate stock buybacks exceeding $1 million in a single fiscal year. This surtax is projected to generate an average of $2 billion annually, which shall be deposited into a dedicated 'National Infrastructure Resilience Fund' to exclusively fund the grant programs and agency initiatives outlined in this Act."
          },
          {
            number: "4.2",
            title: "Oversight and Accountability",
            content: "The Government Accountability Office (GAO) shall be directed to conduct a biennial audit and report to Congress on the effectiveness of the programs established under this Act, including an assessment of progress in enhancing infrastructure resilience, cybersecurity posture, and workforce development, along with recommendations for improvement."
          }
        ],
        allocation: [
          { program: "Cybersecurity Grants", amount: 500, color: "destructive" },
          { program: "Workforce Development", amount: 200, color: "accent" },
          { program: "Innovation Pilots", amount: 100, color: "primary" },
          { program: "Administration & Oversight", amount: 200, color: "muted" },
          { program: "Climate Resilience Programs", amount: "1B", color: "secondary" }
        ],
        accountability: {
          reporting: [
            "Quarterly progress reports from all agencies",
            "Annual public dashboard with key metrics", 
            "Biennial GAO comprehensive audit"
          ],
          metrics: [
            "Infrastructure resilience improvements",
            "Cybersecurity incident reduction",
            "Workforce training completion rates"
          ]
        }
      }
    };

    const bill: Bill = {
      id: randomUUID(),
      title: "National Resilient Infrastructure Act of 2025",
      shortTitle: "National Resilient Infrastructure Act of 2025",
      content: billContent,
      status: "proposed"
    };

    this.bills.set(bill.id, bill);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBill(id: string): Promise<Bill | undefined> {
    return this.bills.get(id);
  }

  async getAllBills(): Promise<Bill[]> {
    return Array.from(this.bills.values());
  }

  async createBill(insertBill: InsertBill): Promise<Bill> {
    const id = randomUUID();
    const bill: Bill = { ...insertBill, id };
    this.bills.set(id, bill);
    return bill;
  }
}

export const storage = new MemStorage();
