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
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confessDate: "2015-06-20",
      confessPlace: "St. Louis Ambohinierana",
      confessPatron: "",
      baptismrenewalDate: "2015-06-20",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2016-06-10",
      firstCommunionPlace: "St. Louis Ambohinierana",
      baptismePlace: "St. Louis Ambohinierana",
      confirmationPlace: "St. Louis Ambohinierana",
      renewalPatron: "",
      confirmationDate: "2018-08-20",
      confirmationPatron: "",
      marriageDate: "",
      marriagePlace:"",
      marriageWitnesses: "",
      status: "active",
      lastActivity : "2023-10-01",
      lastActivityPlace: "St. Louis Ambohinierana",
      family: "FAM001",
      tafo: "T001",
      apvid: "APV1",
      faritra: "FA001",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M002",
      fullName: "Lydia",
      baptismDate: "2008-03-12",
      baptismePlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confessDate: "2014-04-15",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2014-04-15",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2014-05-20",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "",
      confirmationPlace: "",
      confirmationPatron: "",
      marriageDate: "",
      marriagePlace: "",
      marriageWitnesses: "",
      status: "inactive",
      family: "FAM001",
      tafo: "T001",
      apv: "APV1",
      faritra: "FA001",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M003",
      fullName: "Judith",
      baptismDate: "1995-03-22",
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confirmationPatron: "",
      marriageWitnesses: "",
      confessPatron: "",
      renewalPatron: "",
      confessDate: "2000-09-10",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2000-09-10",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2001-04-05",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "2003-07-12",
      confirmationPlace: "St. Louis Ambohinierana",
      marriageDate: "2008-11-01",
      marriagePlace: "St. Louis Ambohinierana",
      status: "Morts",
      family: "FAM002",
      tafo: "T002",
      apv: "APV2",
      faritra: "FA001",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M008",
      fullName: "Ketaka",
      baptismDate: "2000-03-22",
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confirmationPatron: "",
      marriageWitnesses: "",
      confessPatron: "",
      renewalPatron: "",
      confessDate: "2008-09-10",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2022-09-10",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2010-04-05",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "2025-07-12",
      confirmationPlace: "St. Louis Ambohinierana",
      marriageDate: "",
      marriagePlace: "St. Louis Ambohinierana",
      status: "Morts",
      family: "FAM002",
      tafo: "T002",
      apv: "APV2",
      faritra: "FA001",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M005",
      fullName: "Tsiky",
      baptismDate: "2025-03-22",
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confessDate: "",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      renewalPatron: "",
      firstCommunionDate: "",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "",
      confirmationPlace: "St. Louis Ambohinierana",
      confirmationPatron: "",
      confirmationPatron: "",
      marriageDate: "",
      marriagePlace: "St. Louis Ambohinierana",
      marriageWitnesses: "",
      status: "Morts",
      family: "FAM002",
      tafo: "T002",
      apv: "APV2",
      faritra: "FA001",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M004",
      fullName: "Fetra",
      baptismDate: "1990-06-18",
      baptismPlace: "St. Louis Ambohinierana",
      confessDate: "1996-05-10",
      confessPlace: "St. Louis Ambohinierana",
      baptismePlace: "St. Louis Ambohinierana",
      firstCommunionDate: "1996-05-10",
      firstCommunionPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2005-08-15",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      confirmationDate: "2000-09-05",
      confirmationPlace: "St. Louis Ambohinierana",
      marriageDate: "2008-11-01",
      marriagePlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confirmationPatron: "",
      marriageWitnesses: "",
      confessPatron: "",
      renewalPatron: "",
      status: "active",
      family: "FAM002",
      tafo: "T002",
      apv: "APV2",
      faritra: "FA002",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M007",
      fullName: "Tiana",
      baptismDate: "1995-01-10",
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confessDate: "2000-02-20",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2010-03-15",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2011-04-25",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "2015-05-30",
      confirmationPlace: "St. Louis Ambohinierana",
      renewalPatron: "",
      marriageDate: "",
      marriagePlace:"",
      marriageWitnesses: "",
      status: "active",
      family: "FAM003",
      tafo: "T003",
      apv: "APV3",
      faritra: "FA003",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
    id: "M006",
      fullName: "Andry",
      baptismDate: "1992-02-14",
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confessDate: "1998-03-20",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2005-09-10",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2006-06-15",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "2010-08-25",
      confirmationPlace: "St. Louis Ambohinierana",
      renewalPatron: "",
      marriageDate: "",
      marriagePlace:"",
      marriageWitnesses: "",
      status: "active",
      family: "FAM003",
      tafo: "T003",
      apv: "APV3",
      faritra: "FA003",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M009",
      fullName: "Hery",
      baptismDate: "1998-07-22",
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confessDate: "2005-08-15",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2015-09-20",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2016-10-25",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "2020-11-30",
      confirmationPlace: "St. Louis Ambohinierana",
      renewalPatron: "",
      marriageDate: "",
      marriagePlace:"",
      marriageWitnesses: "",
      status: "active",
      family: "FAM004",
      tafo: "T004",
      apv: "APV4",
      faritra: "FA004",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    },
    {
      id: "M010",
      fullName: "Zo",
      baptismDate: "2000-10-30",
      baptismPlace: "St. Louis Ambohinierana",
      baptismName: "",
      baptismPatron: "",
      confessDate: "2006-12-05",
      confessPlace: "St. Louis Ambohinierana",
      baptismrenewalDate: "2015-01-15",
      baptismrenewalPlace: "St. Louis Ambohinierana",
      firstCommunionDate: "2016-02-20",
      firstCommunionPlace: "St. Louis Ambohinierana",
      confirmationDate: "2020-03-25",
      confirmationPlace: "St. Louis Ambohinierana",
      renewalPatron: "",
      marriageDate: "",
      marriagePlace:"",
      marriageWitnesses: "",
      status: "active",
      family: "FAM004",
      tafo: "T004",
      apv: "APV4",
      faritra: "FA004",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001"
    }
  ],

  families: [
    {
      id: "FAM001",
      name: "Rakoto",
      headId: "U005", // Linked to user U005
      tafos: "T001",
      apv: "APV001",
      faritra: "FAR001",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001",
      members: ["M001", "M002"],
      contributions: [
        { date: "2025-04-01", amount: 24500, category: "Seminera Zandriny" }
      ]
    },
    {
      id: "FAM002",
      name: "Rasoanaivo",
      headId: "U004", // Linked to user U004
      tafos: "T002",
      apv: "APV002",
      faritra: "FAR002",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001",
      members: ["M003", "M008"],
      contributions: [
        { date: "2025-04-01", amount: 15000, category: "Fetin'ny Taranaka" }
      ]
    },
    {
      id: "FAM003",
      name: "Ravelojaona",
      headId: "U005", // Linked to user U005
      tafos: "T003",
      apv: "APV003",
      faritra: "FAR003",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001",
      members: ["M007", "M006"],
      contributions: [
        { date: "2025-04-01", amount: 30000, category: "Ezaka Ohatra Fanorenana" }
      ]
    },
    {
      id: "FAM004",
      name: "Andriantsitohaina",
      headId: "U005", // Linked to user U005
      tafos: "T004",
      apv: "APV004",
      faritra: "FAR004",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001",
      members: ["M009", "M010"],
      contributions: [
        { date: "2025-04-01", amount: 20000, category: "Samihafa" }
      ]
    },
    {
      id: "FAM005",
      name: "Ratsimbazafy",
      headId: "U005", // Linked to user U005
      tafos: "T005",
      apv: "APV005",
      faritra: "FAR005",
      parish: "PAR001",
      district: "DIS001",
      vicariate: "VIK001",
      diocese: "DI001",
      archdiocese: "ARCH001",
      members: ["M011", "M012"],
      contributions: [
        { date: "2025-04-01", amount: 18000, category: "Hasin'Andriamanitra (Noely)" }
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
                        pretra: "Père Jean",
                        contact: "+261 32 95 999 60",
                        execTeam: {
                          FilohaFK: "U017",
                          Lefitra1: "",
                          Lefitra2: "",
                          Mpitambola: "U018",
                          Mpitantsoratra: "U019",
                          MpitantsoratraMpanampy: "U020",
                          Mpanolotsaina: ""
                        },
                        CAES: [
                          {
                            id: "CAES001",
                            name: "CAES Alasora",
                            contact: "+261 32 95 999 61",
                            execTeam: {
                              Filoha: "U021",
                              Lefitra1: "",
                              Lefitra2: "",
                              Mpitambola: "U022",
                              Mpitantsoratra: "U023",
                              MpitantsoratraMpanampy: ""
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        holyAssociations: [
                          {
                            id: "HA001",
                            name: "FIFAKRI",
                            category: "FIFAKRI",
                            contact: "",
                            execTeam: {
                              Filoha: "",
                              Lefitra1: "",
                              Lefitra2: "",
                              Mpitambola: "",
                              Mpitantsoratra: "",
                              MpitantsoratraMpanampy: ""
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        vovonana: [
                          {
                            id: "VOV001",
                            name: "Vona Olondehibe",
                            category: "Vona Olondehibe",
                            contact: "",


                            execTeam: {
                              Filoha: "U013",
                              Lefitra1: "",
                              Lefitra2: "",
                              Mpitambola: "U014",
                              Mpitantsoratra: "U015",
                              MpitantsoratraMpanampy: "U016"
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        actionCommittees: [
                          {
                            id: "AC001",
                            name: "Vaomiera Fandaminana",
                            category: "Vaomiera Fandaminana",
                            contact: "",
                            execTeam: {
                              Filoha: "U017",
                              Lefitra1: "",
                              Lefitra2: "",
                              Mpitambola: "U018",
                              Mpitantsoratra: "U019",
                              MpitantsoratraMpanampy: "U020"
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
                              FilohaFaritra: "U003",
                              Lefitra1Faritra: "U004",
                              Lefitra2Faritra: "U005",
                              Mpitambola: "U006",
                              Mpitantsoratra: "U007",
                              Mpitantsoratra2: "U008",
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
                              },
                            {
                              id: "APV002",
                              name: "APV2",
                              execTeam: {
                                leader1: "",
                                secretary1: ""
                              },
                              households: ["T002"]
                            },
                            {
                              id: "APV003",
                              name: "APV3",
                              execTeam: {
                                leader1: "U005",
                                secretary1: "U018"
                              },
                              households: ["T003"]
                            },
                            ],
                          },
                          {
                            id: "FAR002",
                            name: "Md François d'Assise",
                            fokontany: "Ambohidrazaka",
                            contact: "+261 38 99 946 56",
                            execTeam: {
                              FilohaFaritra: "U020",
                              Mpitambola: "U021",
                              Mpitantsoratra: "U022",
                              Lefitra1Faritra: "",
                              Lefitra2Faritra: "",
                              contact2: "",
                              contact3: ""
                            },
                            apvs: [
                              {
                                id: "APV1",
                                name: "APV1",
                                execTeam: {
                                  leader1: "U023",
                                  secretary1: "U024"
                                },
                                tafos: ["T003"]
                              },
                              {
                              id: "APV2",
                              name: "APV2",
                              execTeam: {
                                leader1: "U025",
                                secretary1: "U026"
                              },
                              tafos: ["T004", "T005", "T006"]
                              },
                              {
                              id: "APV3",
                              name: "APV3",
                              execTeam: {
                                leader1: "U027",
                                secretary1: "U028"
                              },
                              households: ["T007"]
                              },
                              {
                              id: "APV4",
                              name: "APV4",
                              execTeam: {
                                leader1: "U029",
                                secretary1: "U030"
                              },
                              households: ["T008"]
                              },
                            ]
                          },
                          {
                            id: "FAR003",
                            name: "Olontsambatra Victoire Rasomanarivo",
                            fokontany: "Miadana-Ambohitromby-Tsilazaina",
                            contact: "+261 32 95 999 61",
                            execTeam: {
                              FilohaFaritra: "U031",
                              Lefitra1Faritra: "U032",
                              Lefitra2Faritra: "U033",
                              Mpitambola: "U032",
                              Mpitantsoratra: "U033"
                            },
                            apvs: [
                              {
                                id: "APV4",
                                name: "APV4",
                                execTeam: {
                                  FilohaAPV: "U034",
                                  Mpitantsoratra: "U035",
                                  Mpitambola: "U036"
                                },
                                tafos: ["T009", "T010"]
                              },
                              {
                                id: "APV5",
                                name: "APV5",
                                execTeam: {
                                  leader1: "U036",
                                  secretary1: "U037"
                                },
                                households: ["T011", "T012", "T013"]
                              },
                              {
                                id: "APV6",
                                name: "APV6",
                                execTeam: {
                                  leader1: "U038",
                                  secretary1: "U039"
                                },
                                tafos: ["T014"]
                              }
                            ],
                            },
                          {
                            id: "FAR004",
                            name: "Md Benoît",
                            fokontany: "Amboaroy-Ankadiaivo",
                            contact1: "+261 34 81 007 73",
                            execTeam: {
                              leader1: "Pdt Aingo",
                              Mpitambola: "Mpitambola Aina",
                              Mpitantsoratra: ""
                            },
                            apvs: [
                              {
                                id: "APV7",
                                name: "APV7",
                                execTeam: {
                                  leader1: "U040",
                                  secretary1: "U041"
                                },
                                households: ["T015", "T016"]
                              },
                              {
                                id: "APV8",
                                name: "APV8",
                                execTeam: {
                                  leader1: "U042",
                                  secretary1: "U043"
                                },
                                households: ["T017"]
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
      apv: "APV1",
      faritra: "Masina Maria Mpanjakavavy",
      fokontany: "Ambodivoanjo",
      parish: "St. Louis Ambohinierana Alasora Parish",
      address: "Lot 123, Ambodivoanjo",
      families: ["FAM001", "FAM002"],
    },
    {
      id: "T002",
      apv: "APV2",
      faritra: "Olontsambatra Victoire Rasomanarivo",
      fokontany: "Miadana-Ambohitromby-Tsilazaina",
      parish: "St. Louis Ambohinierana Alasora Parish",
      address: "Lot 456, Miadana",
      families: ["FAM003", "FAM004", "FAM005"]
    },
    {
      id: "T003",
      apv: "APV5",
      faritra: "Olontsambatra Victoire Rasomanarivo",
      fokontany: "Miadana-Ambohitromby-Tsilazaina",
      parish: "St. Louis Ambohinierana Alasora Parish",
      address: "Lot 456, Tsilazaina",
      families: ["FAM003"]
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
