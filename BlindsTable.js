import React, {useState} from 'react';
import {DataTable, Text} from 'react-native-paper';

const BlindsTable = () => {
  const [data, setData] = useState([]);

  const calculateBlindsData = () => {
    const newData = [];
    for (let level = 1; level <= 10; level++) {
      const time = 3 + (level - 1) * 3;
      const blinds = 1 * Math.pow(2, level - 1); // Double blinds each level (start at 1/2)
      const bigblinds = 2 * Math.pow(2, level - 1);
      newData.push({level, time, blinds, bigblinds});
    }
    setData(newData);
  };

  useState(() => calculateBlindsData(), []);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <Text style={{color: '#5BBEEA'}}>Level</Text>
        </DataTable.Title>
        <DataTable.Title>Time</DataTable.Title>
        <DataTable.Title>Blinds</DataTable.Title>
      </DataTable.Header>

      {data.map(item => (
        <DataTable.Row key={item.level}>
          <DataTable.Cell>
            <Text style={{color: '#5BBEEA'}}>{item.level}</Text>
          </DataTable.Cell>
          <DataTable.Cell>{item.time}:00</DataTable.Cell>
          <DataTable.Cell>
            {item.blinds}/{item.bigblinds}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default BlindsTable;
