import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Nestedtab = () => {
  return (
      <div>
      <h1 style={{ color: 'green', 
      margin: '20px' }}>Nested Tabs</h1>
  <Tabs style={{ width: '500px' }}>
      <TabList style={{
          fontSize: '20px',
          margin: '20px',
          color: "#1616b7",
          borderRadius: '10px',
      }}>
          <Tab  style={{ background: '#a7f8a2', 
              borderRadius: '5px' }}>Tab 1</Tab>
          <Tab style={{ background: '#f4faa0', 
              borderRadius: '5px' }}>Tab 2</Tab>
      </TabList>
      <TabPanel style={{ fontSize: '20px', 
          margin: '20px' }}>
          <Tabs defaultIndex={1}>
              <TabList>
                  <Tab style={{ background: '#f5e5f8', 
                      borderRadius: '5px' }}>Nested-Tab1</Tab>
                  <Tab style={{ background: '#f2f9a0', 
                      borderRadius: '5px' }}>Nested-Tab2</Tab>
                  <Tab style={{ background: '#f5e5f8', 
                      borderRadius: '5px' }}>Nested-Tab3</Tab>
              </TabList>
              <TabPanel>
                  <p style={{ color: 'green' }}>
                      Welcome to GeeksforGeeks</p>

              </TabPanel>
              <TabPanel>
                  <p style={{ color: 'green' }}>
                      A computer science portal for geeks.</p>

              </TabPanel>
              <TabPanel>
                  <p style={{ color: 'green' }}>
                      Also known as GFG</p>

              </TabPanel>
          </Tabs>
      </TabPanel>
      <TabPanel style={{ fontSize: '20px', 
          margin: '20px' }}>
          <Tabs>
              <TabList>
                  <Tab style={{ background: '#f5e5f8', 
                      borderRadius: '5px' }}>Nested-Tab_1</Tab>
                  <Tab style={{ background: '#f2f9a0', 
                      borderRadius: '5px' }}>Nested-Tab_2</Tab>
                  <Tab style={{ background: '#f5e5f8', 
                      borderRadius: '5px' }}>Nested-Tab_3</Tab>
              </TabList>
              <TabPanel>
                  <p style={{ color: 'blue' }}>
                      Welcome to GeeksforGeeks</p>

              </TabPanel>
              <TabPanel>
                  <p style={{ color: 'blue' }}>
                      A computer science portal for geeks.</p>

              </TabPanel>
              <TabPanel>
                  <p style={{ color: 'blue' }}>
                      Also known as GFG</p>

              </TabPanel>
          </Tabs>
      </TabPanel>
  </Tabs>
      </div>
  )
}

export default Nestedtab