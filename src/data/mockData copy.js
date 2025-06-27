// src/data/mockData.js

export const ROLES = {
  visitor: "Mpitsidika",
  believer: "Mpino Katolika",
  family: "Loham-Pianakaviana",
  apv: "Mpitarika APV",
  faritra: "Filohan'ny Faritra",
  priest: "Pretra",
  parish_leader: "Filohan'ny Filan-Kevitra Paroasy"
};

const mockData = {
  isMock: true, // Flag to indicate this is mock data
  version: "1.0.0",
  lastUpdated: "2025-04-01T12:00:00Z",
  description: "Mock data for testing purposes in the Liberstatus application.",
  users: [
    // Priest
    {
      id: "U001",
      email: "priest@example.com",
      password: "123",
      role: ROLES.priest,
      name: "Père Jean",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },

    // Parish Leader
    {
      id: "U002",
      email: "parish-leader@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "Mario",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },

    // Faritra Leader
    {
      id: "U003",
      email: "faritra@example.com",
      password: "123",
      role: ROLES.faritra,
      name: "Judith",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001"
    },

    // APV Leader
    {
      id: "U004",
      email: "apv@example.com",
      password: "123",
      role: ROLES.apv,
      name: "Lydie",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001",
      apv: "APV001"
    },

    // Family Head
    {
      id: "U005",
      email: "family-head@example.com",
      password: "123",
      role: ROLES.family,
      name: "Jean Rakoto",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001",
      apv: "APV001"
    }
  ],

  mpino: [
    {
      id: "M001",
      fullName: "Jean Rakoto",
      baptismDate: "2010-05-15",
      status: "active",
      familyId: "FAM001",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001",
      apv: "APV001"
    },
    {
      id: "M002",
      fullName: "Lydia Razafy",
      baptismDate: "2008-03-12",
      status: "inactive",
      familyId: "FAM001",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001",
      apv: "APV001"
    }
  ],

  families: [
    {
      id: "FAM001",
      name: "Rakoto",
      headId: "U005", // Linked to user U005
      apv: "APV001",
      faritra: "FAR001",
      members: ["M001", "M002"],
      contributions: [
        { date: "2025-04-01", amount: 24500, category: "Seminera Zandriny" }
      ]
    }
  ],

  territories: {
    archdioceses: [
      {
        id: "ARCH001",
        name: "Archidiocese Antananarivo",
        code: "ARCH001",

        dioceses: [
          {
            id: "DI001",
            name: "Diosezy Antananarivo",
            code: "DI001",
            execTeam: {
              leader1: "U001", // Priest
              secretary1: "U002" // Parish Leader
            },

            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Atsinana",
                code: "VIK001",
                execTeam: {
                  leader1: "U001",
                  secretary1: "U002"
                },

                districts: [
                  {
                    id: "DIS001",
                    name: "District Alasora",
                    code: "DIS001",
                    execTeam: {
                      leader1: "U002",
                      treasurer: "U007",
                      secretary1: "U003"
                    },

                    parishes: [
                      {
                        id: "PAR001",
                        name: "Paroasy Saint Louis Ambohinierana",
                        code: "PAR001",
                        logo: "logo_PAR001",
                        address: "Alasora, Analamanga",
                        execTeam: {
                          leader: "U002",
                          deputy1: "",
                          deputy2: "",
                          treasurer: "U007",
                          secretary1: "U003",
                          secretary2: "U008",
                          advisor: ""
                        },
                        holyAssociations: [
                          {
                            id: "HA001",
                            name: "FIFAKRI",
                            category: "FIFAKRI",
                            execTeam: {
                              leader: "U009",
                              deputy1: "",
                              deputy2: "",
                              treasurer: "U010",
                              secretary1: "U011",
                              secretary2: "U012"
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        vovonana: [
                          {
                            id: "VOV001",
                            name: "Vona Olondehibe",
                            category: "Vona Olondehibe",
                            execTeam: {
                              leader: "U013",
                              deputy1: "",
                              deputy2: "",
                              treasurer: "U014",
                              secretary1: "U015",
                              secretary2: "U016"
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        actionCommittees: [
                          {
                            id: "AC001",
                            name: "Vaomiera Fandaminana",
                            execTeam: {
                              leader: "U017",
                              deputy1: "",
                              deputy2: "",
                              treasurer: "U018",
                              secretary1: "U019",
                              secretary2: "U020"
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        faritras: [
                          {
                            id: "FAR001",
                            name: "Masina Maria Mpanjakavavy",
                            fokontany: "Ambodivoanjo",
                            contact: "+261 32 95 999 59",
                            execTeam: {
                              leader1: "U003",
                              treasurer: "U013",
                              secretary1: "U014"
                            },
                            apvs: [
                              {
                                id: "APV001",
                                name: "APV1",
                                execTeam: {
                                  leader1: "U004",
                                  secretary1: "U017"
                                },
                                households: ["T001"]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  tafos: [
    {
      id: "T001",
      address: "Lot 123, Ambodivoanjo",
      headOfHousehold: null,
      families: ["FAM001"]
    }
  ],

  contributionCategories: [
    "Hasin'Andriamanitra (Noely)",
    "Seminera Zandriny",
    "Hasin'Andriamanitra (Paka)",
    "Seminera Ankizy100ar Lehibe200ar",
    "Diosezy Ankizy100ar Lehibe200ar",
    "Fetim-piangonana",
    "Fetin'ny Taranaka",
    "Ezaka Ohatra Fanorenana",
    "Sosialy",
    "Samihafa"
  ],

  holyAssociationCategories: [
    "FIFAKRI",
    "FTK",
    "VAOFAFIA",
    "MDMK",
    "EKIPA RAOZERY",
    "FET",
    "ANTILY",
    "FANILO",
    "GARDE D'HONNEUR"
  ],
  VovonaCategories: [
    "Vona Olondehibe",
    "Vona Tanora",
    "Vahatra",
  ],

  calendarEvents: [
    {
      date: "10 Jona 2025",
      title: "Fanahy Masina",
      description: "Fetin'ny nidinana ny Fanahin'ny Masina"
    },
    {
      date: "23 Jona 2025",
      title: "Fetin'ny Zanak'Andriamanitra",
      description: "Fetin'ny Taranaka"
    }
  ],

  parishMessage: {
    content: "Tonga eto amin'ny Fanaharana ny Liberstatus sy ny Adidy isam-pianakaviana eto anivon'ny Paroasy Alasora.",
    author: "Père Jean",
    date: new Date().toISOString()
  }
};
export default mockData;
