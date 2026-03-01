import { TagContainer } from './styles'

type Props = {
  children: string | string[]
}

const Tag = ({ children }: Props) => (
  <TagContainer>
    {children}
  </TagContainer>
)

export default Tag
