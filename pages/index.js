// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
// import { Heading, UnorderedList, ListItem, Link as Anchor } from 'evergreen-ui';
import Layout from '../components/Layout';
import Image from '../components/src/components/Image/index'

const Index = props => (
  <Layout>
    <>
      <button >Increment</button>
      <button >Decrement</button>
      <div style={{
        width: 100,
        height: 100
      }}>
        <Image alt={1} src="https://cdn140.picsart.com/19274579503054550198.jpg?type=webp&to=min&r=304"/>
      </div>
      <div style={{
        width: 100,
        height: 100
      }}>
        <Image alt={1} src="https://pastatic.picsart.com/illustrator-template/096b1ab4e6f502e470df9b651b5d4fff.png?type=webp&to=min&r=662"/>
      </div>
      <div style={{
        width: 100,
        height: 100
      }}>
        <Image alt={1} src="https://cdn130.picsart.com/96143890757559737559.svg" />
      </div>
      <div style={{
        width: 100,
        height: 100
      }}>
        <Image alt={1} src="https://cdn140.picsart.com/70338789352922248307.gif" isGIF />
      </div>
    </>
  </Layout>
);

export default Index;
