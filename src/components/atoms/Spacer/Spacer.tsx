import React from 'react';
import styled from 'styled-components/native';

interface SpacerProps {
    direction?: 'vertical' | 'horizontal',
    space: string,
}

export const Spacer = (props: SpacerProps) => {
    const HorizontalSpacer = styled.View`
        margin-horizontal: ${props.space};
    `;

    const VerticalSpacer = styled.View`
        margin-vertical:  ${props.space};
    `;

    if(props.direction == 'horizontal'){
        return <HorizontalSpacer/>;
    }
    return <VerticalSpacer/>;
}

