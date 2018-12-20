var mockData = {
    MockTreeData: {
        key: "0001",
        name: "Customer name",
        parentKey: "",
        parentName: "",
        level: 1,
        children: [
            {
                key: "0002",
                name: "Laboratory 1",
                parentKey: "0001",
                parentName: "Customer name",
                level: 2,
                children: []
            },
            {
                key: "0003",
                name: "Laboratory 2",
                parentKey: "0001",
                parentName: "Laboratory 1",
                level: 2,
                children: [
                    {
                        key: "0004",
                        name: "Group 1",
                        parentKey: "0003",
                        parentName: "Laboratory 2",
                        level: 3
                    },
                    {
                        key: "0005",
                        name: "Group 2",
                        parentKey: "0003",
                        parentName: "Laboratory 2",
                        level: 3
                    }
                ]
            }
        ]
    }
}

export default mockData;
