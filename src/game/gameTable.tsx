import React from 'react';
import { Result } from 'antd';
import { AndroidOutlined, MediumCircleFilled } from '@ant-design/icons';
import { GameClient } from './gameClient';
import { Button } from '@mui/material';
import { useGameTableStyles } from './gameTableStyles';

interface Props {
  gameMap: string[]
}

export function GameTable({
  gameMap,
}: Props) {
  const classes = useGameTableStyles();

  const onCellClick = (y: number, x: number) => {
    GameClient.socket.send(`open ${x} ${y}`);
  };

  const renderMap = (items: any) => {
    return items.map((item: any, rowIndex: number) => {
      const squares = item.split('');
      const row = squares.map((square: any, columnIndex: number) => {
        const key = `square-${rowIndex}-${columnIndex}`;
        const testId = `square-${rowIndex}-${columnIndex}`;
        if (square !== '□') {
          return (
            <Button
              variant="outlined"
              color={square === '*' ? 'error' : 'success'}
              onClick={() => onCellClick(rowIndex, columnIndex)}
              key={key}
              className={classes.cellClicked}
              data-testid={testId}
            >
              <p className={classes.text} style={{fontSize: 18}}>
                { square === "*" ? <MediumCircleFilled />
                : square
                }
              </p>
            </Button>
          );
        }
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onCellClick(rowIndex, columnIndex)}
            key={key}
            className={classes.cellNotClicked}
            data-testid={testId}
          />
        );
      });
      return (
        <div
          className={classes.row}
          key={`square-row-${rowIndex}`}>
          {row}
        </div>
      );
    });
  };

  if (!gameMap.length) {
    return (
      <Result
        icon={ <AndroidOutlined style={{color: '#b64949'}} /> }
        title="Press START and enjoy the game!"
      />
    );
  }

  return (
    <div>{renderMap(gameMap)}</div>
  );
}
