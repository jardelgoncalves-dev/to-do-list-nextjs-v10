import { Icon, IconName } from '../Icon'
import { Wrapper } from './styles'

interface ModalProp {
  visible?: boolean
  onClose?: () => void
  header?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
}

export function Modal({
  visible,
  onClose,
  header,
  children,
  footer,
}: ModalProp) {
  return (
    <Wrapper isVisible={!!visible}>
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <Icon name={IconName.close} />
        </button>
        {!!header && <div className="modal__header">{header}</div>}
        {!!children && <div className="modal__content">{children}</div>}
        {!!footer && <div className="modal__footer">{footer}</div>}
      </div>
    </Wrapper>
  )
}
