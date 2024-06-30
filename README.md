# NonSingletonServicesExample

This example provides a mechanism to create new instances of non-singleton services whenever a certain component route is activated

The most common usage of this example is a component crud (for example: product:/id) with different steps/tabs which each step/tab has their own service that storage the data of the step/tab
Before rendering the component crud we may want to recover data from the backend and load each chunk of the data on the corresponding step/tab service
but we may dont want to declare each step/tab service as singleton (provideIn: root) as we consider the services should be deleted whenever we exit the component crud route and be reinstantiated if we enter again with a different /:id
