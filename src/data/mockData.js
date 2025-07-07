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
      id: "PAR001_U000",
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
      id: "PAR001_U001",
      email: "parish-leader@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "Hasina Mario",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U002",
      email: "parish-leader2@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "Pdte R. Aina",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U003",
      email: "parish-leader3@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "R. Julio",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U004",
      email: "parish_secretary@example.com",
      password: "123",
      role: ROLES.holyAssociations_leader,
      name: "R. Sahondra",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U005",
      email: "parish-secretary2@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "Rasoanaivo",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U005",
      email: "caes-leader@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "R. Hery Filoha CAES",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U007",
      email: "ha-leader@example.com",
      password: "123",
      role: ROLES.holyAssociations_leader,
      name: "R. Mamy Filoha HA",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U008",
      email: "parish-councilsGroups@example.com",
      password: "123",
      role: ROLES.councilsGroups_leader,
      name: "Melanie Rasoanaivo",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U009",
      email: "parish-leader@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "Rabehevitra",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },
    {
      id: "PAR001_U010",
      email: "parish-commissions@example.com",
      password: "123",
      role: ROLES.parish_leader,
      name: "Rakoto Vaomiera",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001"
    },

    // Faritra Leader
    {
      id: "FAR001_U001",
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
    {
      id: "FAR002_U001",
      email: "faritra@example.com",
      password: "123",
      role: ROLES.faritra,
      name: "Pdte Judicaelle",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR002"
    },

    // APV Leader
    {
      id: "APV001_U001",
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
    {
      id: "APV002_U001",
      email: "apv@example.com",
      password: "123",
      role: ROLES.apv,
      name: "Ramatoa Lydie",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001",
      apv: "APV002"
    },
    {
      id: "APV003_U001",
      email: "apv@example.com",
      password: "123",
      role: ROLES.apv,
      name: "Mlle Sylvie",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001",
      apv: "APV003"
    },
    {
      id: "APV004_U001",
      email: "apv@example.com",
      password: "123",
      role: ROLES.apv,
      name: "Mlle Hanta",
      archdiocese: "ARCH001",
      diocese: "DI001",
      vicariate: "VIK001",
      district: "DIS001",
      parish: "PAR001",
      faritra: "FAR001",
      apv: "APV004"
    },

    // Family Head
    {
      id: "APV001_U001",
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
    },
    
  ],

  believers: [
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
      baptismPlace: "St. Louis Ambohinierana",
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
      roofHousehold: "T001",
      apv: "APV001",
      zone: "FA001",
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
      baptismPlace: "St. Louis Ambohinierana",
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
      roofHouseHold: "T001",
      apv: "APV001",
      zone: "FA001",
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
      roofHouseHolds: "T002",
      apv: "APV002",
      zone: "FA001",
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
      roofHouseHolds: "T002",
      apv: "APV002",
      zone: "FA001",
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
      roofHouseHold: "T002",
      apv: "APV002",
      zone: "FA001",
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
      roofHouseHold: "T002",
      apv: "APV002",
      zone: "FA002",
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
      roofHouseHold: "T003",
      apv: "APV003",
      zone: "FA003",
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
      roofHouseHold: "T003",
      apv: "APV003",
      zone: "FA003",
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
      roofHouseHold: "T004",
      apv: "APV004",
      zone: "FA004",
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
      roofHouseHold: "T004",
      apv: "APV004",
      zone: "FA004",
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
        execTeam: {
          leader1: "", // Priest
          secretary1: "" // Parish Leader
        },

        dioceses: [
          {
            id: "DI001",
            name: "Diosezy Antananarivo",
            code: "DI001",
            execTeam: {
              leader1: "", // Priest
              secretary1: "" // Parish Leader
            
            },

            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Atsinanana",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },

                districts: [
                  {
                    id: "DIS001",
                    name: "District Alasora",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                   

                    parishes: [
                      {
                        id: "PAR001",
                        name: "Masindahy Louis Ambohinierana",
                        code: "PAR001",
                        logo: "logo_PAR001",
                        address: "Alasora, Antananarivo Avaradrano, Analamanga",
                        priest: "Père Ranofinidy Jean",
                        contact: "+261 32 95 999 60",
                        execTeam: {
                          president: "PAR001_U001", // Parish Leader
                          vicePresident1: "PAR001_U002", // Vice Parish Leader
                          vicePresident2: "PAR001_U003", // Vice Parish Leader
                          treasurer: "PAR001_U004", // Treasurer
                          secretary: "PAR001_U005", // Secretary
                          deputySecretary: "PAR001_U006", // Deputy Secretary
                          advisor: ""
                        },
                        financesCouncil: [
                          {
                            id: "CAES001",
                            name: "CAES Alasora",
                            contact: "+261 32 95 999 61",
                            execTeam: {
                              president: "PAR001_U006",
                              vicePresident1: "",
                              vicePresident2: "",
                              treasurer: "",
                              secretary: "",
                              deputySecretary: ""
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
                              president: "PAR001_U007",
                              vicePresident1: "",
                              vicePresident2: "",
                              treasurer: "",
                              secretary: "",
                              deputySecretary: ""
                            },
                            memberIds: ["PAR001_U007"]
                          }
                        ],
                        councilsGroups: [
                          {
                            id: "VOV001",
                            name: "Elder Group",
                            category: "Elder Group",
                            contact: "",
                            execTeam: {
                              president: "U013",
                              vicePresident1: "",
                              vicePresident2: "",
                              treasurer: "U014",
                              secretary: "U015",
                              deputySecretary: "U016"
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        commissions: [
                          {
                            id: "AC001",
                            name: "Organizing Commission",
                            category: "Organizing Commission",
                            contact: "",
                            execTeam: {
                              president: "U017",
                              vicePresident1: "",
                              vicePresident2: "",
                              treasurer: "U018",
                              secretary: "U019",
                              deputySecretary: "U020"
                            },
                            memberIds: ["M001", "M002"]
                          }
                        ],
                        zones: [
                          {
                            id: "FAR001",
                            name: "Masina Maria Mpanjakavavy",
                            neighborhood: "Ambodivoanjo",
                            contact: "+261 32 95 999 59",
                            execTeam: {
                              zonePresident: "U003",
                              zoneVicePresident1: "U004",
                              zoneVicePresident2: "U005",
                              zoneTreasurer: "U006",
                              zoneSecretary: "U007",
                              zoneSecondSecretary: "U008"
                            },
                            apvs: [
                              {
                                id: "APV001",
                                name: "APV1",
                                execTeam: {
                                  leader: "U004",
                                  secretary: "U017"
                                },
                                roofHouseholds: ["T001"]
                              },
                              {
                                id: "APV002",
                                name: "APV2",
                                execTeam: {
                                  leader: "",
                                  secretary: ""
                                },
                                roofHouseholds: ["T002"]
                              },
                              {
                                id: "APV003",
                                name: "APV3",
                                execTeam: {
                                  leader: "U005",
                                  secretary: "U018"
                                },
                                roofHouseholds: ["T003"]
                              }
                            ]
                          },
                          {
                            id: "FAR002",
                            name: "Md François d'Assise",
                            neighborhood: "Ambohidrazaka",
                            contact: "+261 38 99 946 56",
                            execTeam: {
                              zonePresident: "U020",
                              zoneTreasurer: "U021",
                              zoneSecretary: "U022",
                              zoneVicePresident1: "",
                              zoneVicePresident2: "",
                              contact2: "",
                              contact3: "",
                              zoneSecondSecretary: ""
                            },
                            apvs: [
                              {
                                id: "APV1",
                                name: "APV1",
                                execTeam: {
                                  leader: "U023",
                                  secretary: "U024"
                                },
                                roofHouseHolds: ["T003"]
                              },
                              {
                                id: "APV2",
                                name: "APV2",
                                execTeam: {
                                  leader: "U025",
                                  secretary: "U026"
                                },
                                roofHouseHolds: ["T004", "T005", "T006"]
                              },
                              {
                                id: "APV3",
                                name: "APV3",
                                execTeam: {
                                  leader: "U027",
                                  secretary: "U028"
                                },
                                roofHouseholds: ["T007"]
                              },
                              {
                                id: "APV4",
                                name: "APV4",
                                execTeam: {
                                  leader: "U029",
                                  secretary: "U030"
                                },
                                roofHouseholds: ["T008"]
                              }
                            ]
                          },
                          {
                            id: "FAR003",
                            name: "Olontsambatra Victoire Rasomanarivo",
                            neighborhood: "Miadana-Ambohitromby-Tsilazaina",
                            contact: "+261 32 95 999 61",
                            execTeam: {
                              zonePresident: "U031",
                              zoneVicePresident1: "U032",
                              zoneVicePresident2: "U033",
                              zoneTreasurer: "U032",
                              zoneSecretary: "U033",
                              zoneSecondSecretary: ""
                            },
                            apvs: [
                              {
                                id: "APV4",
                                name: "APV4",
                                execTeam: {
                                  apvPresident: "U034",
                                  secretary: "U035",
                                  treasurer: "U036"
                                },
                                roofHouseHolds: ["T009", "T010"]
                              },
                              {
                                id: "APV5",
                                name: "APV5",
                                execTeam: {
                                  leader: "U036",
                                  secretary: "U037"
                                },
                                roofHouseholds: ["T011", "T012", "T013"]
                              },
                              {
                                id: "APV6",
                                name: "APV6",
                                execTeam: {
                                  leader: "U038",
                                  secretary: "U039"
                                },
                                roofHouseHolds: ["T014"]
                              }
                            ]
                          },
                          {
                            id: "FAR004",
                            name: "Mb Benoît",
                            neighborhood: "Amboaroy-Ankadiaivo",
                            contact1: "+261 34 81 007 73",
                            execTeam: {
                              leader: "Pdt Aingo",
                              treasurer: "Mpitambola Aina",
                              secretary: ""
                            },
                            apvs: [
                              {
                                id: "APV7",
                                name: "APV7",
                                execTeam: {
                                  leader: "U040",
                                  secretary: "U041"
                                },
                                roofHouseHolds: ["T015", "T016"]
                              },
                              {
                                id: "APV8",
                                name: "APV8",
                                execTeam: {
                                  leader: "U042",
                                  secretary: "U043"
                                },
                                roofHouseholds: ["T017"]
                              }
                            ]
                          }
                        ]
                      },
                      
                      { id: "PAR002",
                        name: "Fiangonanana Anganomasina",
                        logo: "logo_PAR002",
                        address: "Anganomasina, Alasora, Analamanga"},
                      { id: "PAR003",
                        name: "Samboranto",
                        logo: "logo_PAR003",
                        address: "Samboranto, Alasora, Analamanga" 
                      }


                    ]
                    
                  },
                  {
                  id: "DIS002",
                  name: "District Ambohijanaka",
                  code: "DIS002",
                  execTeam: {
                    leader1: "",
                    treasurer: "",
                    secretary1: ""
                  },
                  parishes: [
                    {
                      id: "PAR001",
                      name: "Paroasy Ambohijanaka",
                      code: "PAR004",
                      logo: "logo_PAR004",
                      address: "Ambohijanaka, Analamanga",
                      priest: "Père Jean",
                      contact: "+261 32 95 999 60",
                      execTeam: {
                        president: "",
                        vicePresident1: "",
                        vicePresident2: "",
                        treasurer: "",
                        secretary: "",
                        deputySecretary: "",
                        advisor: ""
                      },
                      CAES: [],
                      holyAssociations: [],
                      councilsGroups: [],
                      commissions: [],
                      areas: []
                    }
                  ]
                }
                ]
              },
              {
                id: "VIK002",
                name: "Vikaria Afovoany",
                code: "VIK002",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Mahamasina",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI002",
            name: "Diosezy Antsirabe",
            code: "DI002",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Antsirabe",
                code: "VIK003",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Antsirabe",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI003",
            name: "Diosezy Maintirano",
            code: "DI003",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Maintirano",
                code: "VIK004",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Maintirano",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI004",
            name: "Diosezy Miarinarivo",
            code: "DI004",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Miarinarivo",
                code: "VIK005",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Miarinarivo",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI005",
            name: "Diosezy Tsiroanomandidy",
            code: "DI005",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Tsiroanomandidy",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Tsiroanomandidy",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          }


        ]
      },
      {
        id: "ARCH002",
        name: "Archidiocese Antsiranana",
        code: "ARCH002",
        execTeam: {
          leader1: "",
          secretary1: ""
        },
        dioceses: [
          {
            id: "DI001",
            name: "Diosezy Antsiranana",
            code: "DI001",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Antsiranana",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Antsiranana",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI002",
            name: "Diosezy Ambanja",
            code: "DI002",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Ambanja",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Ambanja",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI003",
            name: "Diosezy Mahajanga",
            code: "DI003",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Mahajanga",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Mahajanga",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI004",
            name: "Diosezy Port Bergé",
            code: "DI004",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Port Bergé",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Port Bergé",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "ARCH003",
        name: "Archidiocese Toamasina",
        code: "ARCH003",
        execTeam: {
          leader1: "",
          secretary1: ""
        },
        dioceses: [
          {
            id: "DI001",
            name: "Diosezy Toamasina",
            code: "DI001",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Toamasina",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Toamasina",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI002",
            name: "Diosezy Fenoarivo Atsinanana",
            code: "DI002",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Fenoarivo Atsinanana",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Fenoarivo Atsinanana",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI003",
            name: "Diosezy Ambatondrazaka",
            code: "DI003",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Ambatondrazaka",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Ambatondrazaka",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI004",
            name: "Diosezy Moramanga",
            code: "DI004",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Moramanga",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Moramanga",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          }
        ]

      },
      {
        id: "ARCH004",
        name: "Archidiocese Fianarantsoa",
        code: "ARCH004",
        execTeam: {
          leader1: "",
          secretary1: ""
        },
        dioceses: [
          {
            id: "DI001",
            name: "Diosezy Fianarantsoa",
            code: "DI001",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Fianarantsoa",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Fianarantsoa",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI002",
            name: "Diosezy Ihosy",
            code: "DI002",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Ihosy",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Ihosy",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
            id: "DI003",
            name: "Diosezy Farafangana",
            code: "DI003",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Farafangana",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: [
                  {
                    id: "DIS001",
                    name: "District Farafangana",
                    code: "DIS001",
                    execTeam: {
                      leader1: "",
                      treasurer: "",
                      secretary1: ""
                    },
                    parishes: []
                  }
                ]
              }
            ]
          },
          {
          id: "DI004",
          name: "Diosezy Mananjary",
          code: "DI004",
          execTeam: {
            leader1: "",
            secretary1: ""
          },
          vicariates: [
            {
              id: "VIK001",
              name: "Vikaria Mananjary",
              code: "VIK001",
              execTeam: {
                leader1: "",
                secretary1: ""
              },
              districts: []
      },

      {
        id: "ARCH005",
        name: "Archidiocese Toliara",
        code: "ARCH005",
        execTeam: {
          leader1: "",
          secretary1: ""
        }
      }
    ]
          },
          {
            id: "DI005",
            name: "Diosezy Ambositra",
            code: "DI005",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Ambositra",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: []
              }
            ]
          }
        ]
      },
      {
        id: "ARCH005",
        name: "Archidiocese Toliara",
        code: "ARCH005",
        execTeam: {
          leader1: "",
          secretary1: ""
        },
        dioceses: [
          {
            id: "DI001",
            name: "Diosezy Toliara",
            code: "DI001",
            execTeam: {
              leader1: "",
              secretary1: ""
            },
            vicariates: [
              {
                id: "VIK001",
                name: "Vikaria Toliara",
                code: "VIK001",
                execTeam: {
                  leader1: "",
                  secretary1: ""
                },
                districts: []
              }
            ]
          }
        ]
      }
    ]
  },


  roofHouseHolds: [
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
  holyGroupmentCategories: [
    "Vona Olondehibe",
    "Vona Tanora",
    "Vahatra",
  ],

  commissionCategories: [
    "Vaomiera Fandaminana",
    "Vaomiera Litorijia",
    "Vaomiera Fanatanjahantena",
    "Vaomiera Fampianarana",
    "Vaomiera Fampandrosoana",
    "Vaomiera Sosialy"
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
