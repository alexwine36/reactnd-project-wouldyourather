import { Button, EventProps, Label, Radio, RadioGroup } from 'mabrg-ui';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CenteredContainer, QuestionCard } from '../../atoms';
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
      <QuestionCard author={author}>
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
            disabled={this.state.answer === ''}
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
      </QuestionCard>
    );
  }
}

export default connect()(AnswerQuestionComponent);
