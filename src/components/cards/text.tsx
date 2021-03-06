import React, { PropsWithChildren } from "react";
import { GenericCard } from "./generic";
import { TextCardBox, TextHolder } from "./text.styled";
import { TextCardProps } from "../../types";

export const TextCard = ({
  textSize = 25,
  textColor,
  textType = "normal",
  textWeight = "normal",
  textVerticalPosition = "start",
  textHorizontalPosition = "center",
  children,
}: PropsWithChildren<TextCardProps>) => {
  return (
    <GenericCard>
      <TextCardBox
        textVerticalPosition={textVerticalPosition}
        textHorizontalPosition={textHorizontalPosition}
      >
        <TextHolder
          textSize={textSize}
          textColor={textColor}
          textType={textType}
          textWeight={textWeight}
        >
          {children}
        </TextHolder>
      </TextCardBox>
    </GenericCard>
  );
};
