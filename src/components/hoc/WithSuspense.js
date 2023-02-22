const WithSuspense = (Component) => {
    return () => {
       return <Suspense fallback={<div>Loading...</div>}><Component {...props}/></Suspense>
    }
}