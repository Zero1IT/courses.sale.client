import {Form} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import Chips from "react-chips";
import CourseService from "../../js/services/CourseService";
import * as Showdown from "showdown";
import ReactMde from "react-mde";

const minHeightTypes = new Map();
minHeightTypes.set("small", "62px");
minHeightTypes.set("medium", "75px");
minHeightTypes.set("large", "95px");

function FormField(props) {
  const {input, label, type, noLabel, typeParams, heightType,
    meta: { invalid, error, valid, touched, visited }, className, flcn, formAs} = props;

  return (
    <Form.Group className={className} style={heightType && {minHeight: minHeightTypes.get(heightType)}}>
      {!noLabel && <Form.Label className={flcn}>{label}</Form.Label>}
      <Form.Control {...input} type={type} {...typeParams} placeholder={label}
                    as={formAs} isValid={(visited || touched) && valid} isInvalid={(visited || touched) && invalid} />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

function FormChips(props) {
  const {input, label, noLabel, heightType, className, flcn, maxChips} = props;
  const [chips, setChips] = useState(input.value || []);

  const onChange = useCallback(chs => {
    if (chs.length > maxChips) { // replace last element with new
      const lastAdded = chs.pop();
      if (!chs.includes(lastAdded.toLowerCase())) {
        chs.pop();
        chs.push(lastAdded);
      }
    }
    chs = [...new Set(chs.map(it => it.toLowerCase()))];
    setChips(chs);
    input.onChange(chs);
  }, [input, maxChips]);

  const suggester = useCallback(async value => CourseService.suggestTopicName(value), []);

  return (
    <Form.Group className={className} style={heightType && {minHeight: minHeightTypes.get(heightType)}}>
      {!noLabel && <Form.Label className={flcn}>{label}</Form.Label>}
      <Chips suggestions={["Your", "Data", "Here"]}  value={chips} onChange={onChange} fetchSuggestionsThrushold={1}
             createChipKeys={['Enter', 'Tab']} fetchSuggestions={suggester}
             placeholder={chips.length < maxChips ? `Максимум ${maxChips}. Осталось ${maxChips - chips.length}` : 'Больше нельзя добавить'}/>
    </Form.Group>
  )
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});


function MDRedactor(props) {
  const {input, label, noLabel, heightType, className, flcn} = props;
  const [selectedTab, setSelectedTab] = useState("write");

  return (
    <Form.Group className={className} style={heightType && {minHeight: minHeightTypes.get(heightType)}}>
      {!noLabel && <Form.Label className={flcn}>{label}</Form.Label>}
      <ReactMde l18n={{write: "Редактор", preview: "Превью", uploadingImage: "Загрузка изображения ...", pasteDropSelect: "Чтобы прикрепить файл, перенесите или вставьте в поле"}}
                toolbarButtonComponent={ToolbarButton}
                value={input.value}
                onChange={input.onChange}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
      />
    </Form.Group>
  )
}

function ToolbarButton(props) {
  console.log(props);
  return <button className="btn-simple" {...props}>Dick time</button>
}

export {
  FormField, FormChips, MDRedactor, converter
};