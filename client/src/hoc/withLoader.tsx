import { FC } from 'react'

interface withLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends object>(
  WrappedComponent: FC<P>
): FC<P & withLoadingProps> {
  
  const WithLoading: FC<P & withLoadingProps> = ({ isLoading, ...props }: { isLoading: boolean } & P) => isLoading
    ? <div>is Loading</div>
    : <WrappedComponent {...props as P} />

  return WithLoading;
}

export default withLoading