import { Body, Button, Card, Heading, Input } from 'mabrg-ui';
import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Dispatch } from 'redux';
import line from '../../images/line.svg';
import { handleAddQuestion } from '../../store/actions/questions';
import styled from '../../theme';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const OrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1em 0;
  img {
    margin: 1em;
    width: 100%;
  }
`;

class NewQuestionComponent extends Component<{
  dispatch: Dispatch<any>;
}> {
  public state = {
    optionOneText: '',
    optionTwoText: '',
    complete: false,
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
    e.preventDefault();
    const { dispatch } = this.props;
    console.info('Submitted');
    const { optionOneText, optionTwoText } = this.state;
    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    this.setState(() => ({
      complete: true,
    }));
  }
  public render() {
    const { optionOneText, optionTwoText, complete } = this.state;
    const valid = optionOneText !== '' && optionTwoText !== '';
    return (
      <Card>
        {complete && <Redirect to="/" />}
        <Card.Primary outline={true}>
          <Heading level={4}>Create New Question</Heading>
        </Card.Primary>
        <Card.Secondary>
          <Body my={4} small={true}>
            Complete the question:
          </Body>
          <Body my={4}>Would you rather...</Body>
          <form onSubmit={e => this.handleSubmit(e)}>
            <Input
              outlined={true}
              id="optionOneText"
              type="text"
              value={optionOneText}
              label="Option 1"
              onChange={e => this.handleChange(e)}
            />
            <OrContainer>
              <img src={line} alt="" />
              OR
              <img src={line} alt="" />
            </OrContainer>

            <Input
              outlined={true}
              id="optionTwoText"
              type="text"
              value={optionTwoText}
              label="Option 2"
              onChange={e => this.handleChange(e)}
            />
            <ButtonContainer>
              <Button
                type="submit"
                disabled={!valid}
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
