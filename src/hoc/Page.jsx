import React from 'react'
import { observer } from 'mobx-react'
import Error from '../mobx/PageError'

import PageError from '../user/pageUser/PageError'

const Page = observer(({ children }) => {

    if (Error.isError) return <PageError />

    return <>{children}</>
  }
)

export default Page
