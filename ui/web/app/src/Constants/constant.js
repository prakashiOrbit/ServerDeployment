export const sideMenu = [
    {
        text: "Farmer",
        options: [
            {
                text: "Onboard farmer",
                link: "/farmer"
            },
            {
                text: "List",
                link: "/list"
            }
        ]
    },
    {
        text: "Purchase order",
        options: [
            {
                text: "Create",
                link: "/po"
            },
            {
                text: "List",
                link: "/list"
            }
        ]
    },
    {
        Headers: "Master Data",
        text: "Product",
        options: [
            {
                text: "Create",
                link: "/create"
            },
            {
                text: "List",
                link: "/list"
            }
        ]
    }
]

export const config = {
    host : "localhost",
    port: "9082",
    tenant: "fresh2rely"
}