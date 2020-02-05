import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import CreateStudent from '../pages/Students/CreateStudent';
import EditStudent from '../pages/Students/EditStudent';

import ListPlan from '../pages/Plans/ListPlan';
import FormPlan from '../pages/Plans/FormPlan';

import ListRegistration from '../pages/Registrations/ListRegistration';
import FormRegistration from '../pages/Registrations/FormRegistration';

import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/students/new" component={CreateStudent} isPrivate />
      <Route path="/students/:id" component={EditStudent} isPrivate />

      <Route path="/plans/new" component={FormPlan} isPrivate />
      <Route path="/plans/:id" component={FormPlan} isPrivate />
      <Route path="/plans" component={ListPlan} isPrivate />

      <Route path="/registrations/new" component={FormRegistration} isPrivate />
      <Route path="/registrations/:id" component={FormRegistration} isPrivate />
      <Route path="/registrations" component={ListRegistration} isPrivate />

      <Route path="/helporders" component={HelpOrders} is isPrivate />
    </Switch>
  );
}
