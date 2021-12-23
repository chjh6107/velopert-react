import Counter from './components/Count';
import Hello from './components/Hello'
import InputSample from './components/InputSample';
import Wrapper from './components/Wrapper';

function App() {

    return (
        <Wrapper>
            <Hello name="reaact" color="red" isSpecial/>
            <Hello color="pink"/>
            <Counter/>
            <br/>
            <InputSample/>
        </Wrapper>
    )
}

export default App;
