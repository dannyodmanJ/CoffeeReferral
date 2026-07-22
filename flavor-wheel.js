(function () {
  const wheelData = {
    name: "Coffee Flavor Wheel",
    children: [
      {
        name: "Fruity",
        children: [
          {
            name: "Berry",
            children: [
              { name: "Blueberry", value: 1 },
              { name: "Raspberry", value: 1 },
              { name: "Blackberry", value: 1 },
              { name: "Strawberry", value: 1 }
            ]
          },
          {
            name: "Citrus",
            children: [
              { name: "Lemon", value: 1 },
              { name: "Orange", value: 1 },
              { name: "Lime", value: 1 },
              { name: "Grapefruit", value: 1 }
            ]
          },
          {
            name: "Stone Fruit",
            children: [
              { name: "Peach", value: 1 },
              { name: "Apricot", value: 1 },
              { name: "Cherry", value: 1 },
              { name: "Plum", value: 1 }
            ]
          },
          {
            name: "Dried Fruit",
            children: [
              { name: "Raisin", value: 1 },
              { name: "Date", value: 1 },
              { name: "Fig", value: 1 }
            ]
          }
        ]
      },
      {
        name: "Floral",
        children: [
          {
            name: "Flower",
            children: [
              { name: "Jasmine", value: 1 },
              { name: "Rose", value: 1 },
              { name: "Lavender", value: 1 },
              { name: "Chamomile", value: 1 }
            ]
          },
          {
            name: "Tea-Like",
            children: [
              { name: "Black Tea", value: 1 },
              { name: "Green Tea", value: 1 },
              { name: "Earl Grey", value: 1 }
            ]
          }
        ]
      },
      {
        name: "Sweet",
        children: [
          {
            name: "Sugary",
            children: [
              { name: "Brown Sugar", value: 1 },
              { name: "Honey", value: 1 },
              { name: "Molasses", value: 1 },
              { name: "Maple Syrup", value: 1 }
            ]
          },
          {
            name: "Confection",
            children: [
              { name: "Vanilla", value: 1 },
              { name: "Caramel", value: 1 },
              { name: "Toffee", value: 1 }
            ]
          }
        ]
      },
      {
        name: "Nutty/Cocoa",
        children: [
          {
            name: "Nutty",
            children: [
              { name: "Almond", value: 1 },
              { name: "Hazelnut", value: 1 },
              { name: "Peanut", value: 1 }
            ]
          },
          {
            name: "Cocoa",
            children: [
              { name: "Cocoa Powder", value: 1 },
              { name: "Dark Chocolate", value: 1 },
              { name: "Milk Chocolate", value: 1 }
            ]
          }
        ]
      },
      {
        name: "Spices",
        children: [
          {
            name: "Brown Spice",
            children: [
              { name: "Cinnamon", value: 1 },
              { name: "Clove", value: 1 },
              { name: "Nutmeg", value: 1 }
            ]
          },
          {
            name: "Pungent",
            children: [
              { name: "Black Pepper", value: 1 },
              { name: "Cardamom", value: 1 },
              { name: "Ginger", value: 1 }
            ]
          }
        ]
      },
      {
        name: "Roasted",
        children: [
          {
            name: "Smoky",
            children: [
              { name: "Smoke", value: 1 },
              { name: "Pipe Tobacco", value: 1 }
            ]
          },
          {
            name: "Burnt",
            children: [
              { name: "Toast", value: 1 },
              { name: "Charred", value: 1 }
            ]
          }
        ]
      },
      {
        name: "Green/Vegetative",
        children: [
          {
            name: "Vegetative",
            children: [
              { name: "Bell Pepper", value: 1 },
              { name: "Green Bean", value: 1 },
              { name: "Fresh Pea", value: 1 }
            ]
          },
          {
            name: "Herbal",
            children: [
              { name: "Fresh Herb", value: 1 },
              { name: "Hay", value: 1 },
              { name: "Tea Leaf", value: 1 }
            ]
          }
        ]
      },
      {
        name: "Sour/Fermented",
        children: [
          {
            name: "Sour",
            children: [
              { name: "Citric", value: 1 },
              { name: "Malic", value: 1 },
              { name: "Acetic", value: 1 }
            ]
          },
          {
            name: "Fermented",
            children: [
              { name: "Winey", value: 1 },
              { name: "Overripe Fruit", value: 1 },
              { name: "Whiskey", value: 1 }
            ]
          }
        ]
      }
    ]
  };

  const selectionNoteMap = {
    Fruity: ["berry", "citrus", "stone fruit", "dried fruit", "tropical"],
    Berry: ["berry"],
    Blueberry: ["berry"],
    Raspberry: ["berry"],
    Blackberry: ["berry"],
    Strawberry: ["berry"],
    Citrus: ["citrus"],
    Lemon: ["citrus"],
    Orange: ["citrus"],
    Lime: ["citrus"],
    Grapefruit: ["citrus"],
    "Stone Fruit": ["stone fruit"],
    Peach: ["stone fruit"],
    Apricot: ["stone fruit"],
    Cherry: ["stone fruit"],
    Plum: ["stone fruit"],
    "Dried Fruit": ["dried fruit"],
    Raisin: ["dried fruit"],
    Date: ["dried fruit"],
    Fig: ["dried fruit"],
    Floral: ["floral", "tea-like"],
    Flower: ["floral"],
    Jasmine: ["floral"],
    Rose: ["floral"],
    Lavender: ["floral"],
    Chamomile: ["floral", "tea-like"],
    "Tea-Like": ["tea-like"],
    "Black Tea": ["tea-like"],
    "Green Tea": ["tea-like", "herbal"],
    "Earl Grey": ["tea-like", "citrus"],
    Sweet: ["caramel", "honey", "vanilla", "brown sugar", "molasses"],
    Sugary: ["brown sugar", "honey", "molasses"],
    "Brown Sugar": ["brown sugar"],
    Honey: ["honey"],
    Molasses: ["molasses"],
    "Maple Syrup": ["brown sugar", "caramel"],
    Confection: ["vanilla", "caramel"],
    Vanilla: ["vanilla"],
    Caramel: ["caramel"],
    Toffee: ["caramel"],
    "Nutty/Cocoa": ["nutty", "chocolate"],
    Nutty: ["nutty"],
    Almond: ["nutty"],
    Hazelnut: ["nutty"],
    Peanut: ["nutty"],
    Cocoa: ["chocolate"],
    "Cocoa Powder": ["chocolate"],
    "Dark Chocolate": ["chocolate"],
    "Milk Chocolate": ["chocolate"],
    Spices: ["spice"],
    "Brown Spice": ["spice"],
    Cinnamon: ["spice"],
    Clove: ["spice"],
    Nutmeg: ["spice"],
    Pungent: ["spice"],
    "Black Pepper": ["spice"],
    Cardamom: ["spice"],
    Ginger: ["spice"],
    Roasted: ["chocolate", "molasses", "spice"],
    Smoky: ["molasses", "spice"],
    Smoke: ["molasses", "spice"],
    "Pipe Tobacco": ["molasses", "spice"],
    Burnt: ["chocolate", "molasses"],
    Toast: ["chocolate", "nutty"],
    Charred: ["chocolate", "molasses"],
    "Green/Vegetative": ["herbal"],
    Vegetative: ["herbal"],
    "Bell Pepper": ["herbal"],
    "Green Bean": ["herbal"],
    "Fresh Pea": ["herbal"],
    Herbal: ["herbal"],
    "Fresh Herb": ["herbal"],
    Hay: ["herbal", "tea-like"],
    "Tea Leaf": ["tea-like", "herbal"],
    "Sour/Fermented": ["citrus", "winey", "dried fruit"],
    Sour: ["citrus"],
    Citric: ["citrus"],
    Malic: ["citrus", "stone fruit"],
    Acetic: ["winey"],
    Fermented: ["winey", "dried fruit", "tropical"],
    Winey: ["winey"],
    "Overripe Fruit": ["tropical", "dried fruit"],
    Whiskey: ["winey", "spice"]
  };

  function leafCount(node = wheelData) {
    if (!node.children?.length) {
      return 1;
    }
    return node.children.reduce((count, child) => count + leafCount(child), 0);
  }

  function notesForSelections(selections) {
    return new Set(
      Array.from(selections).flatMap((selection) => selectionNoteMap[selection] || [])
    );
  }

  function create({ container, selections, onToggle, minDiameter = 340, maxDiameter = 760 }) {
    let selected = new Set(selections);
    let resizeObserver;
    let frameId = 0;
    let observedWidth = container.clientWidth;

    function queueRender() {
      if (frameId) {
        clearTimeout(frameId);
      }
      frameId = window.setTimeout(() => {
        frameId = 0;
        render();
      }, 0);
    }

    function render() {
      container.innerHTML = "";

      const availableWidth = container.clientWidth || maxDiameter;
      const diameter = Math.max(minDiameter, Math.min(availableWidth, maxDiameter));
      const radius = diameter / 2;
      const root = d3
        .partition()
        .size([2 * Math.PI, radius - 8])(
          d3
            .hierarchy(wheelData)
            .sum((item) => (item.children ? 0 : item.value ?? 1))
            .sort((first, second) => (second.value ?? 0) - (first.value ?? 0))
        );

      const topLevelNodes = root.children ?? [];
      const palette = [
        "#b63f2b",
        "#c16a1d",
        "#b79a25",
        "#6f8c2f",
        "#2b8a64",
        "#3977bd",
        "#6657a8",
        "#aa4271",
        "#6e4d41"
      ];
      const colorScale = d3
        .scaleOrdinal()
        .domain(topLevelNodes.map((node) => node.data.name))
        .range(palette);

      root.eachAfter((node) => {
        const ownMatch = selected.has(node.data.name);
        const childMatch = node.children?.some((child) => child._branchSelected) ?? false;
        node._branchSelected = ownMatch || childMatch;
      });

      root.each((node) => {
        if (node.depth === 0) {
          return;
        }

        const lineage = node.ancestors().reverse();
        const topNode = lineage[1] ?? node;
        const topColor = d3.hsl(colorScale(topNode.data.name));
        const siblings = node.parent?.children ?? [node];
        const siblingIndex = siblings.findIndex((sibling) => sibling === node);
        const siblingCount = Math.max(1, siblings.length);
        const hueShift =
          node.depth === 1
            ? 0
            : d3
              .scaleLinear()
              .domain([0, siblingCount - 1 || 1])
              .range([-7, 7])(siblingIndex);
        const saturation = Math.max(0.38, topColor.s - Math.max(0, node.depth - 1) * 0.08);
        const lightness = Math.min(
          0.84,
          Math.max(
            0.32,
            topColor.l + Math.max(0, node.depth - 1) * 0.12 + siblingIndex * 0.012
          )
        );

        node._fill = d3
          .hsl((topColor.h + hueShift + 360) % 360, saturation, lightness)
          .formatHex();
        node._selected = selected.has(node.data.name);
        node._selectionContext =
          selected.size === 0 ||
          node._branchSelected ||
          node.ancestors().some((ancestor) => selected.has(ancestor.data.name));
      });

      const arc = d3
        .arc()
        .startAngle((node) => node.x0)
        .endAngle((node) => node.x1)
        .padAngle((node) => Math.min((node.x1 - node.x0) / 2, 0.008))
        .padRadius(radius / 2)
        .innerRadius((node) => node.y0 + 2)
        .outerRadius((node) => Math.max(node.y0 + 8, node.y1 - 2));
      const hoverArc = d3
        .arc()
        .startAngle((node) => node.x0)
        .endAngle((node) => node.x1)
        .padAngle((node) => Math.min((node.x1 - node.x0) / 2, 0.008))
        .padRadius(radius / 2)
        .innerRadius((node) => Math.max(0, node.y0 + 2 - (node.depth === 1 ? 4 : 2)))
        .outerRadius((node) => Math.max(node.y0 + 8, node.y1 - 2 + (node.depth === 1 ? 8 : 4)));

      const svg = d3
        .create("svg")
        .attr("viewBox", [-radius, -radius, diameter, diameter])
        .attr("focusable", "false")
        .attr("role", "img")
        .attr("aria-label", "Interactive coffee flavor wheel");
      const nodes = root.descendants().filter((node) => node.depth > 0);
      const paths = svg
        .append("g")
        .selectAll("path")
        .data(nodes)
        .join("path")
        .attr("d", arc)
        .attr("fill", (node) => node._fill)
        .attr("fill-opacity", (node) => (
          node._selectionContext ? (node.depth === 1 ? 0.92 : 0.98) : 0.18
        ))
        .attr("stroke", (node) => (
          node._selected ? "#1c140f" : "rgba(255, 255, 255, 0.72)"
        ))
        .attr("stroke-width", (node) => (node._selected ? 2.2 : 1))
        .attr("vector-effect", "non-scaling-stroke")
        .attr("tabindex", 0)
        .attr("role", "button")
        .attr("aria-label", (node) => `${node.data.name}, click to toggle selection`)
        .attr("aria-pressed", (node) => String(node._selected))
        .style("cursor", "pointer")
        .on("mouseenter", function (event, node) {
          d3.select(this)
            .raise()
            .interrupt()
            .transition()
            .duration(140)
            .attr("stroke-width", node._selected ? 2.8 : 1.8)
            .attr("d", hoverArc(node));
        })
        .on("mouseleave", function (event, node) {
          d3.select(this)
            .interrupt()
            .transition()
            .duration(140)
            .attr("stroke-width", node._selected ? 2.2 : 1)
            .attr("d", arc(node));
        })
        .on("click", (event, node) => {
          event.preventDefault();
          event.stopPropagation();
          onToggle(node.data.name);
        })
        .on("keydown", (event, node) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle(node.data.name);
          }
        });

      paths.append("title").text((node) => `${node.data.name}\nClick to toggle selection`);

      const labelNodes = nodes.filter((node) => {
        const angle = node.x1 - node.x0;
        const ringDepth = node.y1 - node.y0;
        const arcLength = ((node.y0 + node.y1) / 2) * angle;
        return ringDepth > 12 && arcLength > 24;
      });

      svg
        .append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(labelNodes)
        .join("text")
        .attr("transform", (node) => {
          const angle = ((node.x0 + node.x1) / 2) * (180 / Math.PI);
          const distance = (node.y0 + node.y1) / 2;
          const flip = angle >= 180 ? 180 : 0;
          return `rotate(${angle - 90}) translate(${distance},0) rotate(${flip})`;
        })
        .attr("dy", "0.35em")
        .attr("font-size", (node) => (node.depth === 1 ? 11.5 : 9.5))
        .attr("font-weight", (node) => (
          node._selected ? 700 : node.depth === 1 ? 600 : 500
        ))
        .attr("fill", (node) => (node.depth === 1 ? "#fff8ef" : "#1d140f"))
        .text((node) => node.data.name);

      const centerRadius = Math.max(38, (root.children?.[0]?.y0 ?? radius * 0.22) - 8);
      const centerGroup = svg.append("g").attr("text-anchor", "middle");

      centerGroup
        .append("circle")
        .attr("r", centerRadius)
        .attr("fill", "#f5ecdf")
        .attr("stroke", "#d5c0a4")
        .attr("stroke-width", 1.5);

      ["Coffee", "Flavor"].forEach((line, index) => {
        centerGroup
          .append("text")
          .attr("y", (index - 0.5) * 15)
          .attr("font-size", 12)
          .attr("font-weight", 700)
          .attr("letter-spacing", 0.3)
          .attr("fill", "#38261b")
          .text(line);
      });

      container.appendChild(svg.node());
    }

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver((entries) => {
        const nextWidth = entries[0]?.contentRect.width ?? container.clientWidth;
        if (Math.abs(nextWidth - observedWidth) < 1) {
          return;
        }
        observedWidth = nextWidth;
        queueRender();
      });
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", queueRender);
    }

    queueRender();

    return {
      update(nextSelections) {
        selected = new Set(nextSelections);
        queueRender();
      },
      destroy() {
        if (frameId) {
          clearTimeout(frameId);
        }
        if (resizeObserver) {
          resizeObserver.disconnect();
        } else {
          window.removeEventListener("resize", queueRender);
        }
      }
    };
  }

  window.CoffeeFlavorWheel = {
    create,
    leafCount: leafCount(),
    notesForSelections,
    wheelData
  };
})();
