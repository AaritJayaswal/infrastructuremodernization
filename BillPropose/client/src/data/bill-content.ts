export interface BillContent {
  overview: {
    title: string;
    subtitle: string;
    purpose: string[];
    keyProvisions: {
      title: string;
      description: string;
      icon: string;
    }[];
    funding: {
      source: string;
      fund: string;
    };
  };
  climate: {
    title: string;
    sections: {
      number: string;
      title: string;
      content: string;
    }[];
    timeline: {
      month: number;
      milestone: string;
    }[];
  };
  cybersecurity: {
    title: string;
    sections: {
      number: string;
      title: string;
      content: string;
    }[];
    allocation: {
      technology: number;
      training: number;
      response: number;
    };
  };
  workforce: {
    title: string;
    sections: {
      number: string;
      title: string;
      content: string;
    }[];
    outcomes: {
      training: {
        workers: string;
        colleges: string;
        programs: string;
      };
      innovation: {
        projects: string;
        partnerships: string;
        patents: string;
      };
    };
  };
  funding: {
    title: string;
    sections: {
      number: string;
      title: string;
      content: string;
    }[];
    allocation: {
      program: string;
      amount: number | string;
      color: string;
    }[];
    accountability: {
      reporting: string[];
      metrics: string[];
    };
  };
}
