export class BaseData<T> {
  value: T;         // 值
  key: string;      // id
  label: string;    // 标签
  required: boolean;   // 是否必填
  order: number;       // 顺序
  controlType: string;  // 类型（text,select,radio...）
  selected: string;     // 类型为select时，选中值
  placeholder: string;   // 默认填充提示

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    selected?: string;
    placeholder?: string;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.selected = options.selected || '';
    this.placeholder = options.placeholder || '';
  }
}
