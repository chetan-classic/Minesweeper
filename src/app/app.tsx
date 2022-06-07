import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { createGame, initialiazeGame } from '../game/gameReducers';
import { RootState } from '../store/store';
import { GameTable } from '../game/gameTable';
import { useAppStyles, Item } from './appStyles';

function App() {
  const dispatch = useDispatch();
  const classes = useAppStyles();
  const [level, setLevel] = useState(1);
  const gameState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  const onPlayGame = () => {
    dispatch(createGame(`new ${level}`));
  };

  const handleOnLevelChange = (event: SelectChangeEvent) => {
    const newLevel = Number(event?.target?.value);
    setLevel(newLevel);
  };

  return (
    <>
      <div className={classes.layout}>
        <Item elevation={2} className={classes.container}>
          <div className={classes.header}>
            <div className={classes.headText}>Minesweeper</div>
            <div>
              <FormControl fullWidth className={classes.levelSelector} size="small">
                  <InputLabel id="level-select-label">Level</InputLabel>
                  <Select
                    labelId="level-select-label"
                    id="level-select"
                    value={`${level}`}
                    label="Level"
                    onChange={handleOnLevelChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  onClick={onPlayGame}
                  variant="contained"
                  className={classes.startButton}
                  data-testid="start-game-btn"
                >
                  {gameState.map.length ? 'Play again' : 'Start'}
                </Button>
              </div>
            <div className={classes.message}>
              {gameState.message === 'You lose' ? 'You Lose' : ''}
            </div>
          </div>
          
          <div className={gameState.map.length <= 10 ? `${classes.content} ${classes.smallContent}` : classes.content}>
            <GameTable gameMap={gameState.map}/>
          </div>
        </Item>
      </div>
    </>
  );
}

export default App;
