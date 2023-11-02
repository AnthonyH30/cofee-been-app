import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: '#121212';
    position: relative;
`;

export const Title = styled.Text`
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    color: white;
    margin-bottom: 20px;
`;

export const Description = styled.Text`
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: white;
    margin-bottom: 20px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Content = styled.View`
    position: absolute;
    bottom: 50px;
    padding: 8px;
`;

export const Steps = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 100%;
    flex-direction: row;
    margin: 30px 0px;
`;

export const Step = styled.TouchableOpacity`
    height: 5px;
    width: 25%;
    border-radius: 5px;
    background-color: white;
`;

export const ButtonNext = styled.TouchableOpacity`
    align-self: center;
    height: 50px;
    background-color: #0f9565;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 500;
`;

export const Buttons = styled.View`
    position: absolute;
    width: 100%;
    padding: 8px;
    top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`

`;