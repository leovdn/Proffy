import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre Aula</legend>
          
          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Química', label: 'Química' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Física', label: 'Física' },
              { value: 'Programação', label: 'Programação' },
              { value: 'Gramática', label: 'Gramática' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />          
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo Horário
            </button>
          </legend>

            {scheduleItems.map(scheduleItem => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da Semana" 
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-Feira' },
                      { value: '2', label: 'Terça-Feira' },
                      { value: '3', label: 'Quarta-Feira' },
                      { value: '4', label: 'Quinta-Feira' },
                      { value: '5', label: 'Sexta-Feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />
                  <Input name="from" label="Das" type="time" />
                  <Input name="to" label="Até" type="time" />
                </div>
              );
            })}
          
        </fieldset>

        <footer>
          <p><img src={warningIcon} alt="Aviso!"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
