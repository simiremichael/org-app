import React, { Component, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled'
import { Container, TextField } from '@mui/material';
import { setEmployee } from '../features/counter/employeeSlice';
import { useAppDispatch } from '../app/hooks';

const StyledBox = styled(Box)`
width: 100%;
height: 100%;
padding-bottom: 30px;
`
const StyledContainer = styled(Container)`
margin-top: 30px;
`
const StyledDiv = styled.div`
width: 100%;
height: 120px;
border-radius: 5px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const DividerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const VerticalDivider = styled.div`
border-bottom: 1px solid #c4c4c4;
height: 0;
`
const HorinzontalDivider = styled.div`
border-right: 1px solid #c4c4c4;
height: 50px;
width: 0;
align-self: center;
`

const Heading = styled.h1`

`
const UniqueId = styled.h3`

`
const Name = styled.p`

`
const UndoBtn = styled.button`
margin-right: 2px;
`
const RedoBtn = styled(UndoBtn)`
margin-left: 2px;
`

//Employee, 'Tyler Simpson', 'Bruce Willis', 'Georgina Flangy'
export default class HomePage extends Component {
  render() {
   
    interface Employee {
        uniqueId: number
        name: string
        subordinates: Employee[]
    }
    interface IEmployee {
        ceo: Employee;
 }
    const ceo: Employee = {
           uniqueId: 1,
           name: 'Mark Zuckerberg',
           subordinates: []
    }

    class EmployeeOrgApp {
        ceo: any
        constructor(ceo: any) {
            this.ceo = ceo
        }
    }
    const IEmployeeOrgApp = new EmployeeOrgApp(ceo)
//    const supervisor = new EmployeeOrgApp(ceo).ceo.subordinates
//    supervisor.name = 'Sarah Donald'
//    supervisor.uniqueId = 2
   const employees = ceo.subordinates.push(
    {
        name: 'Sarah Donald',
        uniqueId: 2,
        subordinates: []
    },
  {
      name: 'Tyler Simpson',
      uniqueId: 3,
      subordinates: []
  },
  {
    name: 'Bruce Willis',
    uniqueId: 4,
    subordinates: []
  },
{
  name: 'Georgina Flangy',
  uniqueId: 5,
  subordinates: []
},
   )
  
        const Sarah = ceo.subordinates[0].subordinates.push(
    {
        name:  'Cassandra Reynolds',              
        uniqueId: 6,
        subordinates: []
    }
   )
   const Cassandra = ceo.subordinates[0].subordinates[0].subordinates.push(
    {
        name: 'Mary Blue',
        uniqueId: 11,
        subordinates: []
    },
    {
    name: 'Bob Saget',
    uniqueId: 12,
    subordinates: []
}
   )
   const tina = ceo.subordinates[0].subordinates[0].subordinates[1].subordinates.push(
    {
        name: 'Tina Teff',
        uniqueId: 13,
        subordinates: []
    },
   )
   const will = ceo.subordinates[0].subordinates[0].subordinates[1].subordinates[0].subordinates.push(
    {
        name: 'Will Turner:',
        uniqueId: 14,
        subordinates: []
    },
   )
   const tyler = ceo.subordinates[1].subordinates.push(
    {
        name: 'Harry Tobs',
        uniqueId: 7,
        subordinates: []
    },
    {
    name: 'George Carrey',
    uniqueId: 8,
    subordinates: []
},
{
name: 'Gary Styles',
uniqueId: 9,
subordinates: []
}             
   )
   const harry = ceo.subordinates[1].subordinates[0].subordinates.push(
    {
    name: 'Thomas Brown:',
    uniqueId: 15,
    subordinates: []
    } 
   )


   const Georgina = ceo.subordinates[3].subordinates.push(
    {
        name: 'Sophie Turner',
        uniqueId: 10,
        subordinates: []
    }
   )

    console.log(IEmployeeOrgApp)
    

    
    return (
      <StyledBox>
        <Heading>Organizational Chart</Heading>
        <StyledContainer>
            <Grid container>
                <Grid item lg={5} md={5} sm={4.5} xs={4}></Grid>
                <Grid item lg={2} md={2} sm={3} xs={4}>
                 <StyledDiv>
                           <Name>{IEmployeeOrgApp.ceo.name}</Name>     
                 </StyledDiv>
                </Grid>
                <Grid item lg={5} md={5} sm={4.5} xs={4}></Grid>
            </Grid>
            <DividerContainer>
            <HorinzontalDivider />
            </DividerContainer>
            <VerticalDivider />
            <DividerContainer style={{justifyContent: 'space-around'}}>
            <HorinzontalDivider />
            <HorinzontalDivider />
            <HorinzontalDivider />
            <HorinzontalDivider />
            </DividerContainer>
            <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                 <StyledDiv>
                 <Name>{IEmployeeOrgApp.ceo.subordinates[0].name}</Name>    
                 </StyledDiv>
                 <DividerContainer>
                 <HorinzontalDivider />
                 </DividerContainer>
               <Grid container>
               <Grid item lg={12} md={12} sm={12} xs={12}>
               <StyledDiv>
               <Name>{IEmployeeOrgApp.ceo.subordinates[0].subordinates[0].name}</Name>   
               </StyledDiv>
               </Grid>
               </Grid>
               <DividerContainer>
                 <HorinzontalDivider />
                 </DividerContainer>
                 <VerticalDivider />
                 <DividerContainer style={{justifyContent: 'space-around'}}>
                 <HorinzontalDivider />
                  <HorinzontalDivider />
                  </DividerContainer>
               <Grid container spacing={1}>
               <Grid item lg={6} md={6} sm={6} xs={6}>
               <StyledDiv>
               <Name>{IEmployeeOrgApp.ceo.subordinates[0].subordinates[0].subordinates[0].name}</Name>   
               </StyledDiv>
               </Grid>
               <Grid item lg={6} md={6} sm={6} xs={6}>
               <StyledDiv>
               <Name>{IEmployeeOrgApp.ceo.subordinates[0].subordinates[0].subordinates[1].name}</Name>
               </StyledDiv>
               <DividerContainer>
                 <HorinzontalDivider />
                 </DividerContainer>
                 <Grid container>
                 <Grid item lg={12} md={12} sm={12} xs={12}>
               <StyledDiv>
               <Name>{IEmployeeOrgApp.ceo.subordinates[0].subordinates[0].subordinates[1].subordinates[0].name}</Name>
               </StyledDiv>
               </Grid>
               </Grid>
               <DividerContainer>
                 <HorinzontalDivider />
                 </DividerContainer>
                 <Grid container>
                 <Grid item lg={12} md={12} sm={12} xs={12}>
               <StyledDiv>
               <Name>{IEmployeeOrgApp.ceo.subordinates[0].subordinates[0].subordinates[1].subordinates[0].subordinates[0].name}</Name>
               </StyledDiv>
               </Grid>
               </Grid>
               </Grid>
               </Grid>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                 <StyledDiv>
                 <Name>{IEmployeeOrgApp.ceo.subordinates[1].name}</Name>            
                 </StyledDiv>
                 <DividerContainer>
                 <HorinzontalDivider />
                 </DividerContainer>
                 <VerticalDivider />
                 <DividerContainer style={{justifyContent: 'space-around'}}>
                 <HorinzontalDivider />
                  <HorinzontalDivider />
                  <HorinzontalDivider />
                  </DividerContainer>
                  <Grid container spacing={1}>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                  <StyledDiv>
                  <Name>{IEmployeeOrgApp.ceo.subordinates[1].subordinates[0].name}</Name>      
                 </StyledDiv>
                 <DividerContainer>
                 <HorinzontalDivider />
                 </DividerContainer>
                 <Grid container spacing={1}>
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                 <StyledDiv>
                 <Name>{IEmployeeOrgApp.ceo.subordinates[1].subordinates[0].subordinates[0].name}</Name>
                 </StyledDiv>
                 </Grid>
                 </Grid>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                  <StyledDiv>
                  <Name>{IEmployeeOrgApp.ceo.subordinates[1].subordinates[1].name}</Name>       
                 </StyledDiv>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                  <StyledDiv>
                  <Name>{IEmployeeOrgApp.ceo.subordinates[1].subordinates[2].name}</Name>     
                 </StyledDiv>
                  </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                 <StyledDiv>
                 <Name>{IEmployeeOrgApp.ceo.subordinates[2].name}</Name>         
                 </StyledDiv>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                 <StyledDiv>
                 <Name>{IEmployeeOrgApp.ceo.subordinates[3].name}</Name>          
                 </StyledDiv>
                 <DividerContainer>
                 <HorinzontalDivider />
                 </DividerContainer>
                 <Grid container spacing={1}>
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                 <StyledDiv>
                 <Name>{IEmployeeOrgApp.ceo.subordinates[3].subordinates[0].name}</Name>        
                 </StyledDiv>
                 </Grid>
                 </Grid>
                </Grid>
            </Grid>
        </StyledContainer>
      </StyledBox>
    )
  }
}



