import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import './style.css'
import { Menu } from '../Navbar';




export default function Dashborad() {
    return (
        <>
        <Menu/>
        <span className='card'>
     <Card
      // overrides={{Root: {className:'card'}}}
      headerImage={
        "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"  
      }
      
      title="Example card"
    >
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
        ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button overrides={{BaseButton: {style: {width: '100%' , borderRadius:'1rem'}}}}>
          Details
        </Button>
      </StyledAction>
    </Card> 

    </span>
        <span className='card'>
     <Card
      // overrides={{Root: {className:'card'}}}
      headerImage={
            "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"  
      } 
               title="Example card"
    >
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
        ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button overrides={{BaseButton: {style: {width: '100%' , borderRadius:'1rem'}}}}>
          Details
        </Button>
      </StyledAction>
    </Card> 

    </span>
        <span className='card'>
     <Card
      // overrides={{Root: {className:'card'}}}
      headerImage={
        "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"   
      }
      title="Example card"
    >
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
        ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button overrides={{BaseButton: {style: {width: '100%' , borderRadius:'1rem'}}}}>
          Details
        </Button>
      </StyledAction>
    </Card> 

    </span><span className='card'>
     <Card
      // overrides={{Root: {className:'card'}}}
      headerImage={
        "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"   
      }
      
      title="Example card"
    >
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
        ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button overrides={{BaseButton: {style: {width: '100%' , borderRadius:'1rem'}}}}>
          Details
        </Button>
      </StyledAction>
    </Card> 

    </span>
        <span className='card'>
     <Card
      // overrides={{Root: {className:'card'}}}
      headerImage={
        "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"   
      }
      title="Example card"
    >
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
        ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button overrides={{BaseButton: {style: {width: '100%' , borderRadius:'1rem'}}}}>
          Details
        </Button>
      </StyledAction>
    </Card> 

    </span>
        
    </>
    )
}

