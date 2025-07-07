import React from 'react';

export default function TerritoryTree({ parish }) {
  const renderNode = (node, level) => {
    return (
      <ul key={node.id}>
        <li>
          <strong>{node.name}</strong> ({node.id}) - {level}
          {node.children && node.children.length > 0 &&
            node.children.map(child => renderNode(child, level + 1))
          }
        </li>
      </ul>
    );
  };

  // Build simplified structure for rendering
  const buildTreeStructure = () => {
    const path = [];

    for (const archdiocese of mockData.territories.archdioceses) {
      for (const diocese of archdiocese.dioceses || []) {
        for (const vicariate of diocese.vicariates || []) {
          for (const district of vicariate.districts || []) {
            for (const p of district.parishes || []) {
              if (p.id === parish.id) {
                path.push(archdiocese);
                archdiocese.children = [diocese];
                diocese.children = [vicariate];
                vicariate.children = [district];
                district.children = [p];

                if (p.zones) {
                  p.children = p.zones.map(zone => ({
                    id: zone.id,
                    name: zone.name,
                    children: zone.apvs || []
                  }));
                }

                return archdiocese;
              }
            }
          }
        }
      }
    }

    return null;
  };

  const tree = buildTreeStructure();

  return (
    <div className="territory-tree">
      {tree ? renderNode(tree, 1) : <p>Tsy hita ny tetiaram-Piangonana</p>}
    </div>
  );
}