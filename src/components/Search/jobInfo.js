const jobInfo = [
    {
        number: "224001",
        name: "Garden Street Reconstruction",
        workingDays: 120,
        workingDaysRemaining: 60,
        startDate: "2023-04-01",
        endDate: "2023-09-30",
        city: "London",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224002",
        name: "Riverside Drive Watermain Replacement",
        workingDays: 90,
        workingDaysRemaining: 30,
        startDate: "2023-05-15",
        endDate: "2023-08-15",
        city: "London",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224003",
        name: "Elm Street Sewer Expansion",
        workingDays: 150,
        workingDaysRemaining: 100,
        startDate: "2023-03-01",
        endDate: "2023-10-01",
        city: "Sarnia",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224004",
        name: "Maple Lane Resurfacing",
        workingDays: 45,
        workingDaysRemaining: 15,
        startDate: "2023-07-01",
        endDate: "2023-08-15",
        city: "Chatham",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224005",
        name: "Queen's Park Redevelopment",
        workingDays: 180,
        workingDaysRemaining: 90,
        startDate: "2023-01-01",
        endDate: "2023-07-01",
        city: "Stratford",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224006",
        name: "Southdale Road Improvement",
        workingDays: 200,
        workingDaysRemaining: 160,
        startDate: "2023-05-01",
        endDate: "2024-01-01",
        city: "Lucan",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224007",
        name: "Weston Drive Storm Drain Installation",
        workingDays: 110,
        workingDaysRemaining: 55,
        startDate: "2023-04-15",
        endDate: "2023-10-15",
        city: "Petrolia",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224008",
        name: "Northfield Drive Bridge Construction",
        workingDays: 300,
        workingDaysRemaining: 200,
        startDate: "2023-02-01",
        endDate: "2024-01-01",
        city: "Chatham",
        work: {surface: true, sanitary: true, storm: true, watermain: true, other: null}
    },
    {
        number: "224009",
        name: "Victoria Street Revitalization",
        workingDays: 90,
        workingDaysRemaining: 45,
        startDate: "2023-06-01",
        endDate: "2023-09-01",
        city: "Ingersoll",
        work: {surface: true, sanitary: true, storm: true, watermain: false, other: null}
    },
    {
        number: "224010",
        name: "Harbour Road Sewage Treatment Upgrade",
        workingDays: 270,
        workingDaysRemaining: 70,
        startDate: "2023-01-15",
        endDate: "2023-10-15",
        city: "Port Frampton",
        work: {surface: true, sanitary: true, storm: false, watermain: true, other: 'parking lot'}
    }
];

export default jobInfo;