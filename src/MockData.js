var mockData = {
    MockTreeData: {
        name: "Customer name",
        parentName: "",
        children: [
            {
                name: "Laboratory 1",
                parentName: "Customer name"
            },
            {
                name: "Laboratory 2",
                parentName: "Laboratory 1",
                children: [
                    {
                        name: "Group 1",
                        parentName: "Laboratory 2"
                    },
                    {
                        name: "Group 2",
                        parentName: "Laboratory 2"
                    }
                ]
            }
        ]
    }
}

export default mockData;
