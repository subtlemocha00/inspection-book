import { v4 as uuidv4 } from 'uuid';

export const jobs = [
    {
        id: uuidv4(),
        number: "224001",
        name: "Garden Street Reconstruction",
        workingDays: 120,
        workingDay: 60,
        startDate: "2023-04-01",
        endDate: "2023-09-30",
        city: "London",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Full reconstruction of Garden Street including replacement of sanitary and storm sewers, watermain, and resurfacing of roadway."
    },
    {
        id: uuidv4(),
        number: "224002",
        name: "Riverside Drive Watermain Replacement",
        workingDays: 90,
        workingDay: 30,
        startDate: "2023-05-15",
        endDate: "2023-08-15",
        city: "London",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Replacement of the existing watermain along Riverside Drive, including new sanitary and storm sewers, with full roadway restoration."
    },
    {
        id: uuidv4(),
        number: "224003",
        name: "Elm Street Sewer Expansion",
        workingDays: 150,
        workingDay: 100,
        startDate: "2023-03-01",
        endDate: "2023-10-01",
        city: "Sarnia",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Expansion of the sewer system on Elm Street, involving new sanitary and storm sewers, watermain installation, and road resurfacing."
    },
    {
        id: uuidv4(),
        number: "224004",
        name: "Maple Lane Resurfacing",
        workingDays: 45,
        workingDay: 15,
        startDate: "2023-07-01",
        endDate: "2023-08-15",
        city: "Chatham",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Resurfacing of Maple Lane, including minor storm sewer repairs and watermain replacement."
    },
    {
        id: uuidv4(),
        number: "224005",
        name: "Queen's Park Redevelopment",
        workingDays: 180,
        workingDay: 90,
        startDate: "2023-01-01",
        endDate: "2023-07-01",
        city: "Stratford",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Redevelopment of Queen's Park including replacement of sanitary sewers, storm sewers, and watermain, with extensive landscaping and pathway construction."
    },
    {
        id: uuidv4(),
        number: "224006",
        name: "Southdale Road Improvement",
        workingDays: 200,
        workingDay: 160,
        startDate: "2023-05-01",
        endDate: "2024-01-01",
        city: "Lucan",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Major improvements to Southdale Road, including widening the roadway, replacing storm and sanitary sewers, and upgrading the watermain."
    },
    {
        id: uuidv4(),
        number: "224007",
        name: "Weston Drive Storm Drain Installation",
        workingDays: 110,
        workingDay: 55,
        startDate: "2023-04-15",
        endDate: "2023-10-15",
        city: "Petrolia",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Installation of a new storm drain system along Weston Drive, with associated watermain upgrades and road resurfacing."
    },
    {
        id: uuidv4(),
        number: "224008",
        name: "Northfield Drive Bridge Construction",
        workingDays: 300,
        workingDay: 200,
        startDate: "2023-02-01",
        endDate: "2024-01-01",
        city: "Chatham",
        work: { surface: true, sanitary: true, storm: true, watermain: true, other: null },
        description: "Construction of a new bridge on Northfield Drive, including associated roadworks, stormwater management, and utility relocations."
    },
    {
        id: uuidv4(),
        number: "224009",
        name: "Victoria Street Revitalization",
        workingDays: 90,
        workingDay: 45,
        startDate: "2023-06-01",
        endDate: "2023-09-01",
        city: "Ingersoll",
        work: { surface: true, sanitary: true, storm: true, watermain: false, other: null },
        description: "Revitalization of Victoria Street, including road resurfacing, storm sewer upgrades, and improvements to pedestrian areas."
    },
    {
        id: uuidv4(),
        number: "224010",
        name: "Harbour Road Sewage Treatment Upgrade",
        workingDays: 270,
        workingDay: 70,
        startDate: "2023-01-15",
        endDate: "2023-10-15",
        city: "Port Frampton",
        work: { surface: true, sanitary: true, storm: false, watermain: true, other: 'parking lot' },
        description: "Upgrade of sewage treatment facilities on Harbour Road, including installation of new sanitary sewers, watermain, and a new parking lot."
    }
];
