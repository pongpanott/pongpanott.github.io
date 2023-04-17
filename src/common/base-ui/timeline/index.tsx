import * as TimeLineComponent from './components';

const Timeline = () => {
    return (
        <TimeLineComponent.Wrapper>
            <TimeLineComponent.CurrentNode label="Present" />
            <TimeLineComponent.DateNode label="March" />
            <TimeLineComponent.DateNode label="February" />
            <TimeLineComponent.DateNode label="January" />
            <TimeLineComponent.DateNode label="Decemter" year="2022" />
        </TimeLineComponent.Wrapper>
    );
};

export default Timeline;
