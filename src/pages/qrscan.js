import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";

const GREEN = "#d0e8cc";
const WHITE = "#FFFFFF";
const CHARCOAL = "#414042";


const PageWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  position: absolute;
  top: 7%;
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    top: 5%;
    width: 90%;
    padding: 1.5rem;
  }
  color: #414042;
  font-family: Averta;
  padding: 4rem;
`;

const HeadingText = styled.div`
  font-size: 2rem;
  font-family: AvertaBold;
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  text-align: ${(props) => props.align};
  margin-bottom: 35px
`;

const SubHeadingText = styled.div`
  font-size: 2rem;
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 0.65rem;
    margin-bottom: 0.2rem;
    margin-top: 0.8rem;
  }
  text-align: ${(props) => props.align};
  margin-bottom: 35px
`;

const ChunkHeading = styled.div`
  font-size: 2rem;
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 0.5rem;
    margin-bottom: 0.2rem;
    margin-top: 1rem;
  }
  text-align: ${(props) => props.align};
  margin-bottom: 35px
`;

const TextBlock = styled.div`
  font-size: 1rem;
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 0.4rem;
    font-weight: 100;
  }
  text-align: ${(props) => props.align};
  line-height: 0.8rem;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

const BoldyJ = styled.span`
  font-family: AvertaBold;
`;

const GoldenText = styled.span`
  color: #FFD700;
`;

const ColumnTextBlock = styled.div`
  font-size: 1rem;
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 0.33rem;
    font-weight: 100;
  }
  line-height: 0.5rem;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem 0 1rem;
`



const SceneSix = (props) => (
    <SceneWrapper backgroundColor={GREEN} height="1400px" mobileHeight="160vh">
      <PageWrapper>
        <HeadingText align='center'>THANK YOU FOR CHOOSING SWEETCREAM!</HeadingText>
        <TextBlock align='center' mb='0.3rem'>We sincerely appreciate your support</TextBlock>
        <TextBlock align='center' mb='1.6rem'>We hope you enjoy every bite. If you have any questions or concerns, or just want to say hello, please reach out to us at info@sweetcreamdairy.com!</TextBlock>
        <TextBlock align='center' mb='50px'>While we're here, we thought we'd take this opportunity to teach you how best to take care of your newly purchased pint. See below for some science and some tips!</TextBlock>
        <HeadingText align='left'>KEEP IT COLD</HeadingText>
        <TextBlock align='left' mb='2rem'>
          <GoldenText>The golden rule: </GoldenText>
          <BoldyJ>Always keep this pint as cold as possible.</BoldyJ>
          <span>This is the most important point to remember. Every bit of advice below is essentially a way of keeping the temperature of your pint as consistently cold as possible.</span>
        </TextBlock>
        <HeadingText align='left'>ICE CRYSTALS VS. THE WORLD</HeadingText>
        <TextBlock align='justify' mb='2rem'>
          <span>The main factor affecting ice cream texture is the size of its component ice crystals. The smaller the ice crystals are, the creamier the product. This is because the human tongue can only detect ice crystals larger than 50 micrometers ( or 50 millionths of a meter), so our job (and now yours!) is to keep the ice crystals in our ice cream below this threshold. Unfortunately, ice crystals are the smallest they will ever be the moment the ice cream is churned. From that point on they can only grow in size, and if given enough opportunities, they will become larger than the 5o micrometer threshold and form unpalatable shards of ice.</span>
          <SubHeadingText>Solid vs. liquid water</SubHeadingText>
          <span>Believe it or not, ice cream is more than 50% water. As we just discussed, some of the water in this pint is frozen into ice crystals. Suprisingly however, much of this water is still liquid. This is an important fact. If all of the water in ice cream were frozen it would literally be a block of ice, impossible to scoop, chew or eat. Ice cream is made scoopable by sugards and salts that are dissolved in this liquid portion, making it harder for the water to freeze (we put salt on the roads during the winter for this very same reason).</span>
          <BoldyJ>The ratio of solid (ice) to liquid water is extremely sensitive to even minor fluctuations in temperature.</BoldyJ>
          <SubHeadingText>Danger Zone</SubHeadingText>
          <span>We like to refer to the temperature range between 0F (your home freezer is pretty close to this) and 10F (a typical ice cream serving temperature) as the "danger zone". Even at freezing temperatures, upticks of just a few degrees can melt a significant portion of the ice crystals present in ice cream. When your freezer moves through its defrost cycle, the interior air temperature can rise by as many as 20 degrees. As the temperature of the ice cream rises, ice crystals melt. The newly formed water droplets coalesce into larger droplets, and when the temperature drops and the water re-freezes, the ice crystals are much larger in size than they were previously. This freeze thaw cycle is precisely what were trying to avoid, and it is how ice crystals grow past the 50 micrometer threshold mentioned earlier.</span>
        </TextBlock>
        <Columns>
          <Column>
            <SubHeadingText>Transport</SubHeadingText>
            <ChunkHeading>Last Out, First In</ChunkHeading>
            <ColumnTextBlock>Get eveything else on your grocery list before the ice cream. When you get home, make it the first thing you put away. This minimizes the time the pint spends outside a freezer and in the "danger zone" mentioned above.</ColumnTextBlock>
            <ChunkHeading>Cold Containment</ChunkHeading>
            <ColumnTextBlock>Keep your pint in an insulated freezer bag, cooler or even a cold canteen. When traveling long distance, use dry ice to keep your pints cold for upwards of 24 hours!</ColumnTextBlock>
            <ChunkHeading>Call Ahead!</ChunkHeading>
            <ColumnTextBlock>If you're planning on picking up some pints at the shop, guve us a call ahead of time so we can pack them up and store in in our EXTREMELY COLD blast freezer.</ColumnTextBlock>
          </Column>
          <Column>
            <SubHeadingText>Storage</SubHeadingText>
            <ChunkHeading>KEEP IT COLD</ChunkHeading>
            <ColumnTextBlock>Keep your freezer as cold as possible. Most home freezers don't get much colder than 0F, but with poper care your ice cream can last upwards of 8 weeks at this temp!</ColumnTextBlock>
            <ColumnTextBlock>Temperatures are most stable in the lower and rear sections of your freezer. Keep your pints there as temperatures are less likely to dip into the dreaded "danger zone".</ColumnTextBlock>
            <ColumnTextBlock>Do not store ice cream in the freezer door. Temperatures fluctuate greatly as the door is open and shut.</ColumnTextBlock>
            <ChunkHeading>Freezer Burn</ChunkHeading>
            <ColumnTextBlock>Freezer burn is caused by air coming into contact with the surface of your ice cream. When scooping from your pint, try to keep the top portion flat. Press a piece of parchment or wax paper (you can reuse the one that came with the pint!) onto the surface to minimize the ice cream's exposure to air. Threat neutralized.</ColumnTextBlock>
          </Column>
          <Column>
            <SubHeadingText>Consumption</SubHeadingText>
            <ChunkHeading>Eat!</ChunkHeading>
            <ColumnTextBlock>Do NOT microwave your ice cream. Just don't do it.</ColumnTextBlock>
            <ColumnTextBlock>Ice cream is best stored below 0F, but should be served at 6-10F. To temper the ice cream, leave the pint in the refrigerator rather than on the kitchen counter.</ColumnTextBlock>
            <ColumnTextBlock>Minimize the time the ice cream is out of the freezer.</ColumnTextBlock>
            <ColumnTextBlock>Eat the entire pint at once! No need to worry about storage temperatures, tempering or defrost cycles if you finish it all in one sitting :)</ColumnTextBlock>
          </Column>
        </Columns>
      </PageWrapper>
    </SceneWrapper>

);

export default SceneSix;
