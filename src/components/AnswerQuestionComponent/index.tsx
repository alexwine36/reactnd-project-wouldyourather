import {
  Avatar,
  Button,
  Card,
  EventProps,
  Heading,
  Label,
  Radio,
  RadioGroup,
} from 'mabrg-ui';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CenteredContainer } from '../../atoms';
import { handleAnswerQuestion } from '../../store/actions/questions';
import { Question } from '../../store/reducers/questions';
import { User } from '../../store/reducers/users';
import styled from '../../theme';

// import { StoreState } from '../../store/reducers';

const StyledRadioGroup = styled(RadioGroup)`
  display: inline-flex;
  label {
    margin: 1em;
    div {
      margin-right: 1em;
    }
  }
`;

const StyledLabel = styled(Label)`
  justify-content: normal;
`;
interface Props {
  author: User;
  question: Question;
  dispatch: any;
}

class AnswerQuestionComponent extends Component<Props> {
  public state = {
    answer: '',
  };
  public handleChange(e: EventProps) {
    const target = e.target;
    const value = target.value;
    console.info(target, value);
    this.setState(() => ({
      answer: value,
    }));
  }
  public handleSubmit() {
    const { dispatch, question } = this.props;
    const { answer } = this.state;
    const qid = question.id;
    dispatch(handleAnswerQuestion(qid, answer));
  }
  public render() {
    const { author, question } = this.props;
    return (
      <Card
        style={{
          maxWidth: 500,
          width: '80%',
        }}
      >
        <Card.Primary outline={true}>
          <Heading level={4}>{author.name} asks:</Heading>
        </Card.Primary>
        <Card.Secondary>
          <CenteredContainer>
            <Avatar m={4} image={author.avatarURL} size={72} />
          </CenteredContainer>
          <StyledRadioGroup
            style={{
              maxWidth: 250,
            }}
            name="answer"
            onChange={e => {
              this.handleChange(e);
            }}
          >
            <StyledLabel>
              <Radio value="optionOne" />
              {question.optionOne.text}
            </StyledLabel>
            <StyledLabel>
              <Radio value="optionTwo" />
              {question.optionTwo.text}
            </StyledLabel>
          </StyledRadioGroup>
          <CenteredContainer>
            <Button
              onClick={() => {
                this.handleSubmit();
              }}
              m={4}
              style={{
                minWidth: '50%',
              }}
              outline={true}
            >
              Submit
            </Button>
          </CenteredContainer>
        </Card.Secondary>
      </Card>
    );
  }
}

// const mapStateToProps = (state: StoreState) => {

// }

export default connect()(AnswerQuestionComponent);
