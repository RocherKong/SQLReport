interface LayerOptions {
    /**
    * ����������
    */
    type?: number;
    /**
    * ����
    */
    title?: string | Array<string> | boolean;
    /**
    * ����
    */
    content?: string | Document | Array<string> | JQuery;
    /**
    * ��ʽ����
    */
    skin?: string;
    /**
    * ���
    */
    area?: string | Array<string>
    /**
    * ����
    */
    offset?: string | Array<string>
    /**
    * icon
    */
    icon?: number;
    /**
    * ��ť
    */
    btn?: string | Array<string>;
    /**
    * �رհ�ť
    */
    closeBtn?: string | boolean | number;
    /**
    * ����
    */
    shade?: string | boolean | Array<string>;
    /**
    * �Ƿ������ֹر�
    */
    shadeClose?: boolean;
    /**
    * �Զ��ر��������
    */
    time?: number;
    /**
* ���ڿ��Ƶ���Ψһ��ʶ
*/
    id?: number;
    /**
    * ����
    */
    shift?: number;
    /**
    * ����
    */
    maxmin?: boolean;
    /**
    * �̶�
    */
    fix?: boolean;
    /**
    * �Ƿ�������������ֹ�����
    */
    scrollbar?: boolean;
    /**
    * �����
    */
    maxWidth?: number;
    /**
    * ���˳��
    */
    zIndex?: number;
    /**
    * �����϶���Ԫ��
    */
    move?: string | Document | boolean;
    /**
    * �����϶���Ԫ��
    */
    moveType?: number;
    /**
    * �Ƿ�������ק��������
    */
    moveOut?: boolean;
    /**
    * �϶���Ϻ�Ļص�����
    */
    moveEnd?: Function;
    /**
    * tips�������ɫ
    */
    tips?: number | Array<any>;
    /**
    * �Ƿ�������tips
    */
    tipsMore?: boolean;
    /**
    * �㵯����ĳɹ��ص�����
    */
    success?: Function;
    /**
    *  ȷ����ť�ص�����
    */
    yes?: Function;
    /**
    * ȡ���͹رհ�ť�����Ļص�
    */
    cancel?: Function;
    /**
    * �����ٺ󴥷��Ļص�
    */
    end?: Function;
    /**
    * ��󻯵Ļص�
    */
    full?: Function;
    /**
    * ��С���Ļص�
    */
    min?: Function;
    /**
    * ��ԭ�Ļص�
    */
    restore?: Function;
}
interface Layer {
    /**
    * ��ʼ��ȫ������
    */
    config(options);
    /**
    * ��ʼ������
    */
    ready(path, callback);
    /**
    * ԭʼ���ķ���
    */
    open(options: LayerOptions);
    /**
    * ��ͨ��Ϣ��
    */
    alert(content, options?: LayerOptions, yes?: Function);
    /**
    * ѯ�ʿ�
    */
    confirm(content, options?: LayerOptions, yes?: Function, cancel?: Function);
    /**
    * ��ʾ��
    */
    msg(content, options?: LayerOptions, end?: Function);
    /**
    * ���ز�
    */
    load(icon, options?: LayerOptions);
    /**
    * tips��
    */
    tips(content, follow, options?: LayerOptions);
    /**
    * �ر��ض���
    */
    close(index);
    /**
    * �ر����в�
    */
    closeAll(type?);
    /**
    * ���¶�������ʽ
    */
    style(index, cssStyle);
    /**
    * �ı��ı���
    */
    title(title, index);
    /**
    * ��ȡiframeҳ��DOM
    */
    getChildFrame(selector, index): Document;
    /**
    *  ��ȡ�ض�iframe�������
    */
    getFrameIndex(windowName);
    /**
    *  ָ��iframe������Ӧ
    */
    iframeAuto(index);
    /**
    *  �����ض�iframe url
    */
    iframeSrc(index, url);
    /**
    *  �ö���ǰ����
    */
    setTop(layero);
    full();
    min();
    restore();
    /**
    *  �����
    */
    prompt(options, yes);
    /**
    *  tab��
    */
    tab(options);
    /**
    *  ����
    */
    photos(options);
}
declare let layer: Layer;

interface LayerDateOptions {
    /**
    * ����ʾ���ڵ�Ԫ��ѡ����
    */
    elem: string;
    /**
    * �����¼�
    */
    event?: string;
    /**
    * ���ڸ�ʽ
    */
    format?: string;
    /**
    * �Ƿ���ʱ��ѡ��
    */
    istime?: boolean,
    /**
    * �Ƿ���ʾ���
    */
    isclear?: boolean;
    /**
    * �Ƿ���ʾ����
    */
    istoday?: boolean;
    /**
    * �Ƿ���ʾȷ��
    */
    issure?: boolean;
    /**
    * �Ƿ���ʾ����
    */
    festival?: boolean;
    /**
    * ��С����
    */
    min?: string;
    /**
    * �������
    */
    max?: string;
    /**
    * ��ʼ����
    */
    start?: string;
    /**
    * �Ƿ�̶��ڿ�������
    */
    fixed?: boolean;
    /**
    * css z-index
    */
    zIndex?: number;
    /**
    *ѡ������ڵĻص�
    */
    choose?: Function;
}
interface LayDate {
    /**
    * laydate �汾��
    */
    v: string;
    /**
    * ����Ƥ��������skinStrΪƤ����
    */
    skin(skinStr: string);
    (options: LayerDateOptions);
    now(timestamp?, format?);
    /**
    * ���������ؼ����꣬һ������ҳ��dom�ṹ�ı�ʱ��
    */
    reset();
}
declare let laydate: LayDate;
