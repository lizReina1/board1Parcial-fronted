export const parcerXmi = (ui) => {

    //console.log(ui.editor.graph.getModel());
   // console.log(ui.editor.graph.getChildVertices(ui.editor.graph.getDefaultParent()));
    const vertex = ui.editor.graph.getChildVertices(ui.editor.graph.getDefaultParent()).map((e)=>{
         e.uuid = self.crypto.randomUUID();
        return e;
    });
    //console.log(ui.editor.graph.getChildEdges(ui.editor.graph.getDefaultParent()));
    const edges = ui.editor.graph.getChildEdges(ui.editor.graph.getDefaultParent()).map((e)=>{
        e.uuid = self.crypto.randomUUID();
       return e;
    });
    console.log(vertex)
    console.log(edges);

    return createTemplate(vertex,'edges');
}

const createTemplate = (vertex,edges)=>{
    return `
    ${header()}
    ${templateModel(vertex, edges)}

    ${templateDiagram(vertex, edges)}
    ${footer()}
`;
}

const templateModel = (vertex,edges) => {
    return `
    ${modelHeader()}
      ${modelElementTaggedValue()}
      ${modelNamespaceOwnedElement(vertex,edges)}
    ${modelFooter()}
    `;
}
const modelElementTaggedValue = () => {
    return `
    <UML:ModelElement.taggedValue>
        <UML:TaggedValue tag="parent" value="EAPK_C82A475D_5AE0_4054_BC85_076B41439621"/>
        <UML:TaggedValue tag="ea_package_id" value="2"/>
        <UML:TaggedValue tag="created" value="2024-01-18 18:00:13"/>
        <UML:TaggedValue tag="modified" value="2024-01-18 18:00:13"/>
        <UML:TaggedValue tag="iscontrolled" value="FALSE"/>
        <UML:TaggedValue tag="lastloaddate" value="2011-10-14 13:52:55"/>
        <UML:TaggedValue tag="lastsavedate" value="2011-10-14 13:52:55"/>
        <UML:TaggedValue tag="version" value="1.0"/>
        <UML:TaggedValue tag="isprotected" value="FALSE"/>
        <UML:TaggedValue tag="usedtd" value="FALSE"/>
        <UML:TaggedValue tag="logxml" value="FALSE"/>
        <UML:TaggedValue tag="tpos" value="0"/>
        <UML:TaggedValue tag="packageFlags" value="isModel=1;VICON=3;CRC=0;"/>
        <UML:TaggedValue tag="batchsave" value="0"/>
        <UML:TaggedValue tag="batchload" value="0"/>
        <UML:TaggedValue tag="phase" value="1.0"/>
        <UML:TaggedValue tag="status" value="Proposed"/>
        <UML:TaggedValue tag="author" value="liz"/>
        <UML:TaggedValue tag="complexity" value="1"/>
        <UML:TaggedValue tag="ea_stype" value="Public"/>
        <UML:TaggedValue tag="tpos" value="0"/>
        <UML:TaggedValue tag="gentype" value="C#"/>
    </UML:ModelElement.taggedValue>
    `;
}
const modelNamespaceOwnedElement = (vertex,edges) => {
    return `
    <UML:Namespace.ownedElement>
    
    ${modelCollaboration(vertex, edges)}

    </UML:Namespace.ownedElement>
    `;
}
const modelCollaboration = (vertex, edges) => {

    let listClassifierRole = ``;

    vertex.forEach((e) => {
        if (e.style.includes("umlBoundary"))
            listClassifierRole += modelCollaborationElementBoundary(e);
        if (e.style.includes("umlControl"))
            listClassifierRole += modelCollaborationElementControl(e);
        if (e.style.includes("umlEntity"))
            listClassifierRole += modelCollaborationElementEntity(e);
    });

    return `
    <UML:Collaboration xmi.id="EAID_E119E75A_C8B5_4f8c_8DB5_5F1E40878144_Collaboration" name="Collaborations">
   
        <UML:Namespace.ownedElement>
            ${listClassifierRole}
        </UML:Namespace.ownedElement>

        <UML:Collaboration.interaction>
              list acciones edges
        </UML:Collaboration.interaction>

    </UML:Collaboration>
    `;
}
const modelActor = () => {
    return `
    <UML:Actor name="usuario" xmi.id="EAID_21F18095_30FE_4d5a_AC46_07872FAF129B" visibility="public" namespace="EAPK_E119E75A_C8B5_4f8c_8DB5_5F1E40878144" isRoot="false" isLeaf="false" isAbstract="false">
        <UML:ModelElement.taggedValue>

            <UML:TaggedValue tag="isSpecification" value="false"/>
            <UML:TaggedValue tag="ea_stype" value="Actor"/>
            <UML:TaggedValue tag="ea_ntype" value="0"/>
            <UML:TaggedValue tag="version" value="1.0"/>
            <UML:TaggedValue tag="isActive" value="false"/>
            <UML:TaggedValue tag="package" value="EAPK_E119E75A_C8B5_4f8c_8DB5_5F1E40878144"/>
            <UML:TaggedValue tag="date_created" value="2024-01-18 18:01:04"/>
            <UML:TaggedValue tag="date_modified" value="2024-01-18 18:01:09"/>
            <UML:TaggedValue tag="gentype" value="&lt;none&gt;"/>
            <UML:TaggedValue tag="tagged" value="0"/>
            <UML:TaggedValue tag="package_name" value="BPMN 2.0 Collaboration View"/>
            <UML:TaggedValue tag="phase" value="1.0"/>
            <UML:TaggedValue tag="author" value="liz"/>
            <UML:TaggedValue tag="complexity" value="1"/>
            <UML:TaggedValue tag="status" value="Proposed"/>
            <UML:TaggedValue tag="tpos" value="0"/>
            <UML:TaggedValue tag="ea_localid" value="15"/>
            <UML:TaggedValue tag="ea_eleType" value="element"/>
            <UML:TaggedValue tag="style" value="BackColor=-1;BorderColor=-1;BorderWidth=-1;FontColor=-1;VSwimLanes=1;HSwimLanes=1;BorderStyle=0;"/>

        </UML:ModelElement.taggedValue>
    </UML:Actor>
    `;
}
const modelCollaborationElementBoundary = (e) => {
    return `
    <UML:ClassifierRole name="${e.value}" xmi.id="EAID_${e.uuid}" visibility="public" base="EAID_11111111_5487_4080_A7F4_41526CB0AA00">
        <UML:ModelElement.stereotype>
            <UML:Stereotype name="boundary"/>
        </UML:ModelElement.stereotype>

        <UML:ModelElement.taggedValue>
            <UML:TaggedValue tag="isAbstract" value="false"/>
            <UML:TaggedValue tag="isSpecification" value="false"/>
            <UML:TaggedValue tag="ea_stype" value="Sequence"/>
            <UML:TaggedValue tag="ea_ntype" value="0"/>
            <UML:TaggedValue tag="version" value="1.0"/>
            <UML:TaggedValue tag="isActive" value="false"/>
            <UML:TaggedValue tag="package" value="EAPK_1062929B_D045_44ec_AA78_890BEE33AF41"/>
            <UML:TaggedValue tag="date_created" value="2024-01-22 09:59:21"/>
            <UML:TaggedValue tag="date_modified" value="2024-01-22 09:59:31"/>
            <UML:TaggedValue tag="gentype" value="&lt;none&gt;"/>
            <UML:TaggedValue tag="tagged" value="0"/>
            <UML:TaggedValue tag="package_name" value="BPMN 2.0 Collaboration View"/>
            <UML:TaggedValue tag="phase" value="1.0"/>
            <UML:TaggedValue tag="author" value="liz"/>
            <UML:TaggedValue tag="complexity" value="1"/>
            <UML:TaggedValue tag="status" value="Proposed"/>
            <UML:TaggedValue tag="stereotype" value="boundary"/>
            <UML:TaggedValue tag="tpos" value="0"/>
            <UML:TaggedValue tag="ea_localid" value="84"/>
            <UML:TaggedValue tag="ea_eleType" value="element"/>
            <UML:TaggedValue tag="style" value="BackColor=-1;BorderColor=-1;BorderWidth=-1;FontColor=-1;VSwimLanes=1;HSwimLanes=1;BorderStyle=0;"/>
            <UML:TaggedValue tag="$ea_xref_property" value="$XREFPROP=$XID={E68B3042-191E-4e0a-B3D6-E7B54AB0D842}$XID;$NAM=Stereotypes$NAM;$TYP=element property$TYP;$VIS=Public$VIS;$PAR=0$PAR;$DES=@STEREO;Name=boundary;@ENDSTEREO;$DES;$CLT={7759BFA0-B916-4b61-BD99-8860862E1306}$CLT;$SUP=&lt;none&gt;$SUP;$ENDXREF;"/>
        </UML:ModelElement.taggedValue>

    </UML:ClassifierRole>
    `; 
}
const modelCollaborationElementControl = (e) => {
    return `
    <UML:ClassifierRole name="${e.value}" xmi.id="EAID_${e.uuid}" visibility="public" base="EAID_11111111_5487_4080_A7F4_41526CB0AA00">
    <UML:ModelElement.stereotype>
        <UML:Stereotype name="control"/>
    </UML:ModelElement.stereotype>
    <UML:ModelElement.taggedValue>
        <UML:TaggedValue tag="isAbstract" value="false"/>
        <UML:TaggedValue tag="isSpecification" value="false"/>
        <UML:TaggedValue tag="ea_stype" value="Sequence"/>
        <UML:TaggedValue tag="ea_ntype" value="0"/>
        <UML:TaggedValue tag="version" value="1.0"/>
        <UML:TaggedValue tag="isActive" value="false"/>
        <UML:TaggedValue tag="package" value="EAPK_E119E75A_C8B5_4f8c_8DB5_5F1E40878144"/>
        <UML:TaggedValue tag="date_created" value="2024-01-18 18:02:18"/>
        <UML:TaggedValue tag="date_modified" value="2024-01-18 18:02:21"/>
        <UML:TaggedValue tag="gentype" value="&lt;none&gt;"/>
        <UML:TaggedValue tag="tagged" value="0"/>
        <UML:TaggedValue tag="package_name" value="BPMN 2.0 Collaboration View"/>
        <UML:TaggedValue tag="phase" value="1.0"/>
        <UML:TaggedValue tag="author" value="liz"/>
        <UML:TaggedValue tag="complexity" value="1"/>
        <UML:TaggedValue tag="status" value="Proposed"/>
        <UML:TaggedValue tag="stereotype" value="control"/>
        <UML:TaggedValue tag="tpos" value="0"/>
        <UML:TaggedValue tag="ea_localid" value="20"/>
        <UML:TaggedValue tag="ea_eleType" value="element"/>
        <UML:TaggedValue tag="style" value="BackColor=-1;BorderColor=-1;BorderWidth=-1;FontColor=-1;VSwimLanes=1;HSwimLanes=1;BorderStyle=0;"/>
        <UML:TaggedValue tag="$ea_xref_property" value="$XREFPROP=$XID={A13CACE7-113A-4b66-B9B7-8624525B6C16}$XID;$NAM=Stereotypes$NAM;$TYP=element property$TYP;$VIS=Public$VIS;$PAR=0$PAR;$DES=@STEREO;Name=control;GUID={0193A766-AF3E-400c-8285-1AD4D9EAF45A};@ENDSTEREO;$DES;$CLT={E82282CD-7D22-4a38-823E-142FE738A2CF}$CLT;$SUP=&lt;none&gt;$SUP;$ENDXREF;"/>
    </UML:ModelElement.taggedValue>
</UML:ClassifierRole>
    `;
}
const modelCollaborationElementEntity = (e) => {
    return `
        <UML:ClassifierRole name="${e.value}" xmi.id="EAID_${e.uuid}" visibility="public" base="EAID_11111111_5487_4080_A7F4_41526CB0AA00">
            <UML:ModelElement.stereotype>
                <UML:Stereotype name="entity"/>
            </UML:ModelElement.stereotype>
            <UML:ModelElement.taggedValue>
                <UML:TaggedValue tag="isAbstract" value="false"/>
                <UML:TaggedValue tag="isSpecification" value="false"/>
                <UML:TaggedValue tag="ea_stype" value="Sequence"/>
                <UML:TaggedValue tag="ea_ntype" value="0"/>
                <UML:TaggedValue tag="version" value="1.0"/>
                <UML:TaggedValue tag="isActive" value="false"/>
                <UML:TaggedValue tag="package" value="EAPK_E119E75A_C8B5_4f8c_8DB5_5F1E40878144"/>
                <UML:TaggedValue tag="date_created" value="2024-01-18 18:02:26"/>
                <UML:TaggedValue tag="date_modified" value="2024-01-18 18:02:34"/>
                <UML:TaggedValue tag="gentype" value="&lt;none&gt;"/>
                <UML:TaggedValue tag="tagged" value="0"/>
                <UML:TaggedValue tag="package_name" value="BPMN 2.0 Collaboration View"/>
                <UML:TaggedValue tag="phase" value="1.0"/>
                <UML:TaggedValue tag="author" value="liz"/>
                <UML:TaggedValue tag="complexity" value="1"/>
                <UML:TaggedValue tag="status" value="Proposed"/>
                <UML:TaggedValue tag="stereotype" value="entity"/>
                <UML:TaggedValue tag="tpos" value="0"/>
                <UML:TaggedValue tag="ea_localid" value="21"/>
                <UML:TaggedValue tag="ea_eleType" value="element"/>
                <UML:TaggedValue tag="style" value="BackColor=-1;BorderColor=-1;BorderWidth=-1;FontColor=-1;VSwimLanes=1;HSwimLanes=1;BorderStyle=0;"/>
                <UML:TaggedValue tag="$ea_xref_property" value="$XREFPROP=$XID={1CD887D8-A8F3-4371-B805-65F20B3A85DC}$XID;$NAM=Stereotypes$NAM;$TYP=element property$TYP;$VIS=Public$VIS;$PAR=0$PAR;$DES=@STEREO;Name=entity;GUID={10E006C8-3523-4c40-A2A0-374651C51F1B};@ENDSTEREO;$DES;$CLT={6FA65B01-50B3-44f7-8586-D4516CEAFCF3}$CLT;$SUP=&lt;none&gt;$SUP;$ENDXREF;"/>
            </UML:ModelElement.taggedValue>
        </UML:ClassifierRole>
    `;
}
const modelHeader = ()=>{
    return `
    <UML:Model name="EA Model" xmi.id="MX_EAID_E119E75A_C8B5_4f8c_8DB5_5F1E40878144">
    <UML:Namespace.ownedElement>
        <UML:Class name="EARootClass" xmi.id="EAID_11111111_5487_4080_A7F4_41526CB0AA00" isRoot="true" isLeaf="false" isAbstract="false"/>
        <UML:Package name="BPMN 2.0 Collaboration View" xmi.id="EAPK_E119E75A_C8B5_4f8c_8DB5_5F1E40878144" isRoot="false" isLeaf="false" isAbstract="false" visibility="public">
            
    `;
}
const modelFooter = ()=>{
    return `
    </UML:Package>
    </UML:Namespace.ownedElement>
</UML:Model>
    `;
}

const header = () => {
    return `
    <?xml version="1.0" encoding="windows-1252"?>
<XMI xmi.version="1.1" xmlns:UML="omg.org/UML1.3" timestamp="2024-01-18 18:09:12">
	<XMI.header>
		<XMI.documentation>
			<XMI.exporter>Enterprise Architect</XMI.exporter>
			<XMI.exporterVersion>2.5</XMI.exporterVersion>
		</XMI.documentation>
	</XMI.header>
	<XMI.content>
    `;
}
const footer = () => {
    return `
    </XMI.content>
	<XMI.difference/>
	<XMI.extensions xmi.extender="Enterprise Architect 2.5"/>
</XMI>
    `;
}

const templateDiagram = (vertex,edges) => {
    return `
    ${collaborationDiagram()}
    ${sequenceDiagram(vertex,edges)}
    `;
}
const collaborationDiagram = () => {
    return `

    `;
}
const sequenceDiagram = (vertex,edges) => {

    let lisElementsVertex = ``;

    vertex.forEach((e) => {
       lisElementsVertex+= diagramElement(e);
    });

    return `

    <UML:Diagram name="BPMN 2.0 Collaboration View" xmi.id="EAID_76D17253_0043_4732_883C_733497D72CD4" diagramType="SequenceDiagram" owner="EAPK_1062929B_D045_44ec_AA78_890BEE33AF41" toolName="Enterprise Architect 2.5">
    <UML:ModelElement.taggedValue>
        <UML:TaggedValue tag="version" value="1.0"/>
        <UML:TaggedValue tag="author" value="liz"/>
        <UML:TaggedValue tag="created_date" value="2024-01-22 09:59:13"/>
        <UML:TaggedValue tag="modified_date" value="2024-01-22 09:59:21"/>
        <UML:TaggedValue tag="package" value="EAPK_1062929B_D045_44ec_AA78_890BEE33AF41"/>
        <UML:TaggedValue tag="type" value="Sequence"/>
        <UML:TaggedValue tag="swimlanes" value="locked=false;orientation=0;width=0;inbar=false;names=false;color=-1;bold=false;fcol=0;tcol=-1;ofCol=-1;ufCol=-1;hl=0;ufh=0;cls=0;SwimlaneFont=lfh:-13,lfw:0,lfi:0,lfu:0,lfs:0,lfface:Calibri,lfe:0,lfo:0,lfchar:1,lfop:0,lfcp:0,lfq:0,lfpf=0,lfWidth=0;"/>
        <UML:TaggedValue tag="matrixitems" value="locked=false;matrixactive=false;swimlanesactive=true;kanbanactive=false;width=1;clrLine=0;"/>
        <UML:TaggedValue tag="ea_localid" value="11"/>
        <UML:TaggedValue tag="EAStyle" value="ShowPrivate=1;ShowProtected=1;ShowPublic=1;HideRelationships=0;Locked=0;Border=1;HighlightForeign=1;PackageContents=1;SequenceNotes=0;ScalePrintImage=0;PPgs.cx=1;PPgs.cy=1;DocSize.cx=827;DocSize.cy=1169;ShowDetails=0;Orientation=P;Zoom=100;ShowTags=0;OpParams=1;VisibleAttributeDetail=0;ShowOpRetType=1;ShowIcons=1;CollabNums=0;HideProps=0;ShowReqs=0;ShowCons=0;PaperSize=9;HideParents=0;UseAlias=0;HideAtts=0;HideOps=0;HideStereo=0;HideElemStereo=0;ShowTests=0;ShowMaint=0;ConnectorNotation=UML 2.1;ExplicitNavigability=0;ShowShape=1;AdvancedElementProps=1;AdvancedFeatureProps=1;AdvancedConnectorProps=1;m_bElementClassifier=1;ShowNotes=0;SuppressBrackets=0;SuppConnectorLabels=0;PrintPageHeadFoot=0;ShowAsList=0;"/>
        <UML:TaggedValue tag="styleex" value="SaveTag=42D6D6B1;ExcludeRTF=0;DocAll=0;HideQuals=0;AttPkg=1;ShowTests=0;ShowMaint=0;SuppressFOC=0;INT_ARGS=;INT_RET=;INT_ATT=;SeqTopMargin=50;MatrixActive=0;SwimlanesActive=1;KanbanActive=0;MatrixLineWidth=1;MatrixLineClr=0;MatrixLocked=0;TConnectorNotation=UML 2.1;TExplicitNavigability=0;AdvancedElementProps=1;AdvancedFeatureProps=1;AdvancedConnectorProps=1;m_bElementClassifier=1;ProfileData=;MDGDgm=;STBLDgm=;ShowNotes=0;VisibleAttributeDetail=0;ShowOpRetType=1;SuppressBrackets=0;SuppConnectorLabels=0;PrintPageHeadFoot=0;ShowAsList=0;SuppressedCompartments=;Theme=:119;"/>
    </UML:ModelElement.taggedValue>

    <UML:Diagram.element>
        ${lisElementsVertex}
    </UML:Diagram.element>

    </UML:Diagram>
    `;
}

const diagramElement = (e) => {

    return `
        <UML:DiagramElement geometry="Left=${e.geometry.x};Top=${e.geometry.y};Right=${e.geometry.x+e.geometry.width};Bottom=${e.geometry.height};" subject="EAID_${e.uuid}" seqno="${e.id}" style="DUID=CAB935B1;"/>
    `;
}