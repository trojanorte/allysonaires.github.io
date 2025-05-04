document.addEventListener("DOMContentLoaded", function () {
    const cy = cytoscape({
        container: document.getElementById("cy"),
        style: [
            {
                selector: "node",
                style: {
                    "background-color": "#00aaff",
                    "label": "data(label)",
                    "color": "#fff",
                    "text-outline-width": 2,
                    "text-outline-color": "#000",
                    "text-valign": "center",
                    "text-halign": "center",
                    "font-size": "14px"
                }
            },
            {
                selector: "edge",
                style: {
                    "width": 2,
                    "line-color": "#ccc",
                    "target-arrow-color": "#ccc",
                    "target-arrow-shape": "triangle",
                    "curve-style": "bezier"
                }
            }
        ],
        elements: {
            nodes: [
                { data: { id: "po", label: "Pesquisa Operacional" } },
                { data: { id: "mcda", label: "MCDA" } },
                { data: { id: "dea", label: "DEA" } },
                { data: { id: "fit", label: "FITRADEOFF" } }
            ],
            edges: [
                { data: { source: "po", target: "mcda" } },
                { data: { source: "mcda", target: "dea" } },
                { data: { source: "fit", target: "mcda" } }
            ]
        },
        layout: {
            name: "cose",
            animate: true,
            fit: true,
            padding: 30
        }
    });

    cy.ready(() => {
        cy.fit(); 
    });
});
