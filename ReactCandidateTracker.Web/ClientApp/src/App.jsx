import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import PendingDetails from './Pages/PendingDetails';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import { CandidateCountsContextComponent } from './CandidateCountsContext';

const App = () => {
    return (
        <CandidateCountsContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/addcandidate' element={<AddCandidate />} />
                    <Route exact path='/pending' element={<Pending />} />
                    <Route exact path='/pending/details/:candidateId' element={<PendingDetails />} />
                    <Route exact path='/confirmed' element={<Confirmed />} />
                    <Route exact path='/refused' element={<Refused />} />
                </Routes>
            </Layout>
        </CandidateCountsContextComponent>
    );
}

export default App;