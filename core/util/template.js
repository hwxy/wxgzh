
import ejs from 'ejs';
import api from '../../api';

const tpl = `<xml>
  <ToUserName>
    <![CDATA[<%= FromUserName %>]]>
  </ToUserName>
  <FromUserName>
    <![CDATA[<%= ToUserName %>]]>
  </FromUserName>
  <CreateTime>
    ${parseInt(new Date().getTime() / 1000 , 0) + ''}
  </CreateTime>
  <% if (MsgType === 'text'){ %>
    <MsgType>
      <![CDATA[text]]>
    </MsgType>
    <Content>
      <![CDATA[<%- Content %>]]>
    </Content>
  <% } else if (MsgType === 'image') { %>
    <MsgType><![CDATA[image]]></MsgType>
    <Image>
      <MediaId><![CDATA[<%- MediaId %>]]></MediaId>
    </Image>
  <% } else if (MsgType === 'voice') { %>
  <Voice>
    <MediaId>
      <![CDATA[<%- MediaId %>}]]>
    </MediaId>    
  </Voice>
  <% } else if (MsgType === 'video') { %>
  <Video>
    <MediaId>
      <![CDATA[<%- MediaId %>}]]>
    </MediaId>    
    <Title>
      <![CDATA[<%- Title %>}]]>
    </Title>    
    <Description>
      <![CDATA[<%- Description %>}]]>
    </Description>    
  </Video>
  <% } else if(MsgType === 'event') { %> 
    <MsgType>
      <![CDATA[text]]>
    </MsgType>
    <Content>
      <![CDATA[<%- Content %>]]>
    </Content>
  <% } %>  
 </xml>`

const formatText = async ({ Content, FromUserName }, accessToken) => {
  if(Content == 1){
    let data = await api.userlist(accessToken);
     return JSON.stringify(data.data);
  }else if(Content == 2){
    // 票据二维码的获取有问题
    let data = await api.qrcode(accessToken);
    return data;
  }else if(Content == 3){
    // 上传素材
    let data = await api.upload(accessToken);
    return 1;
  }else if(Content == 4){
    // 长链接转段链接
    let data = await api.duan(accessToken);
    return data.short_url;

  }else if(Content == 5){
    // 语义理解
    let data = await api.yuyi(accessToken, FromUserName);    
    return JSON.stringify(data);
  }else if(Content == 6){
    // 创建菜单
    let data = await api.menu(accessToken);    
    return '测试时可以尝试取消关注公众账号后再次关注';
  }else if(Content == 7){
    return 1;
  }else if(Content == 8){
    return 1;
  }else if(Content == 9){
    return 1;
  }else if(Content == 10){
    return 1;
  }
}

const formatEvent = async ({ Event }, accessToken) => {
  console.log(Event, 'event');
  let text = 'event view';
  if(Event == 'VIEW'){
    
  }else if(Event == 'scancode_push'){
    
  }else if(Event == 'scancode_waitmsg'){
    
  }else if(Event == 'pic_sysphoto'){
    
  }else if(Event == 'pic_photo_or_album'){
    
  }else if(Event == 'pic_weixin'){
    
  }else if(Event == 'location_select'){
    
  }else if(Event == 'view_miniprogram'){
    
  }
  return Event;
}

export default async (message, accessToken) => {

  console.log(message, 'message');
  
  if(message.MsgType === 'text'){
    message.Content = await formatText(message, accessToken); 
  }

  if(message.Event){
    message.Content = await formatEvent(message, accessToken); 
  }

  return ejs.compile(tpl)(message);
}