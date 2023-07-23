import React, { useEffect, useState } from 'react';

interface DelayLimits {
  min: number;
  max: number;
}

export class CharacterEmitter {
  private interval: any;
  private inputString: string;
  private currentIndex: number = 0;
  private removeCharacterSection = '{r}';
  private currentValue = '';
  private delayLimits: DelayLimits;

  constructor(delayLimits: DelayLimits) {
    this.delayLimits = delayLimits;
    this.inputString = '';
  }

  public subscribe(callback: (value: string) => void, text: string): void {
    const stringWithImperfections = addSpellingMistakes(text);
    this.inputString = stringWithImperfections;
    this.interval = setInterval(() => {
      // If we are at the end of the string, unsubscribe and return
      if (this.currentIndex === this.inputString.length) {
        this.unsubscribe();
        return;
      }

      const indexOfFirstRemoveCharacter = this.inputString.indexOf(
        this.removeCharacterSection,
        this.currentIndex - 1,
      );

      // If we are at the start of the remove character section, remove one character and update current index
      if (
        this.inputString[this.currentIndex] &&
        this.inputString[this.currentIndex] === this.removeCharacterSection[0] &&
        indexOfFirstRemoveCharacter === this.currentIndex
      ) {
        this.currentIndex += this.removeCharacterSection.length - 1;
        this.currentValue = this.currentValue.slice(0, -1);
      } else {
        this.currentValue = this.currentValue + this.inputString[this.currentIndex];
      }

      this.currentIndex++;
      const delay = this.getRandomDelay(this.delayLimits);
      setTimeout(() => {
        callback(this.currentValue);
      }, delay);
    }, this.delayLimits.min);
  }

  public unsubscribe(): void {
    clearInterval(this.interval);
    this.interval = undefined;
  }

  private getRandomDelay(delayLimit: DelayLimits): number {
    return Math.floor(Math.random() * (delayLimit.max - delayLimit.min));
  }
}

class Random {
  static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Returns a random boolean value
   * @param n 1 in n chance of returning true
   */
  static getRandomBoolean(n: number): boolean {
    return Math.floor(Math.random() * n) === 0;
  }
}

function addSpellingMistakes(text: string): string {
  return text
    .split('')
    .map((value) => {
      return Random.getRandomBoolean(5) ? `${getCloseCharacter(value)}{r}${value}` : value;
    })
    .join('');
}

function getCloseCharacter(char: string): string {
  const keyboardLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  ];

  const row = keyboardLayout.find((row) => row.includes(char.toLowerCase()));

  if (!row) {
    return char; // Return the original character if it's not found on the keyboard
  }

  const col = row.indexOf(char.toLowerCase());
  const adjacents = [row[col - 1], row[col + 1]].filter(Boolean); // Remove undefined values

  const closeChar = adjacents.length
    ? adjacents[Math.floor(Math.random() * adjacents.length)]
    : char;

  return char.toUpperCase() === char ? closeChar.toUpperCase() : closeChar;
}

export function useTypeWritingAnimation(text: string) {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const characterEmitter = new CharacterEmitter({
      min: 10,
      max: 100,
    });
    characterEmitter.subscribe((value) => setAnimatedText(value), text);
  }, []);

  return animatedText;
}
