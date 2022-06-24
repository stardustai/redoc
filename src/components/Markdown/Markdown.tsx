import * as React from 'react';

import { MarkdownRenderer } from '../../services';
import { SanitizedMarkdownHTML } from './SanitizedMdBlock';

export interface StylingMarkdownProps {
  compact?: boolean;
  inline?: boolean;
}

export interface BaseMarkdownProps {
  sanitize?: boolean;
  source: string;
  parentId?: string;
}

export type MarkdownProps = BaseMarkdownProps &
  StylingMarkdownProps & {
    source: string;
    className?: string;
    'data-role'?: string;
  };

export class Markdown extends React.Component<MarkdownProps> {
  render() {
    const { source, inline, compact, className, 'data-role': dataRole, parentId } = this.props;
    const renderer = new MarkdownRenderer(undefined, parentId);
    return (
      <SanitizedMarkdownHTML
        html={renderer.renderMd(source)}
        inline={inline}
        compact={compact}
        className={className}
        data-role={dataRole}
      />
    );
  }
}
