import { Button, Card, Heading, Input } from 'mabrg-ui';
import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { handleAddQuestion } from '../../store/actions/questions';
import styled from '../../theme';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

class NewQuestionComponent extends Component<{
  dispatch: Dispatch<any>;
}> {
  public state = {
    optionOneText: '',
    optionTwoText: '',
  };

  public handleChange(event: any) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({
      [name]: value,
    });
  }

  public handleSubmit(e: FormEvent) {
    // TODO redirect on successful submission
    e.preventDefault();
    const { dispatch } = this.props;
    console.info('Submitted');
    const { optionOneText, optionTwoText } = this.state;
    dispatch(handleAddQuestion(optionOneText, optionTwoText));
  }
  public render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <Card>
        <Card.Primary outline={true}>
          <Heading level={4}>Create New Question</Heading>
        </Card.Primary>
        <Card.Secondary>
          <form onSubmit={e => this.handleSubmit(e)}>
            <Input
              id="optionOneText"
              type="text"
              value={optionOneText}
              label="Option 1"
              onChange={e => this.handleChange(e)}
            />
            <Input
              id="optionTwoText"
              type="text"
              value={optionTwoText}
              label="Option 2"
              onChange={e => this.handleChange(e)}
            />
            <ButtonContainer>
              <Button
                m={4}
                style={{
                  minWidth: '50%',
                }}
                outline={true}
              >
                Submit
              </Button>
            </ButtonContainer>
          </form>
        </Card.Secondary>
      </Card>
    );
  }
}

export default connect()(NewQuestionComponent);
